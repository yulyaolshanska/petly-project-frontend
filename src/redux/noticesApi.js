import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_NAME = process.env.REACT_APP_SITE_URL; // REACT_APP_SITE_URL=https://example-project-petly.onrender.com/
const BASE_URL = `${SERVER_NAME}/notices`;

// const BASE_URL = "http://localhost:3001/notices";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery,
  tagTypes: ["Notices", "User"],
  refetchOnMountOrArgChange: true,

  endpoints: builder => ({
    getNotices: builder.query({
      query: ({ currentPage, perPage, category, filter }) => {
        const categoryQuery = !!category ? `category=${category}` : "";
        const pageQuery = `&&page=${currentPage}`;
        const perPageQuery = !!perPage !== 15 ? "" : `&&per_page=${perPage}`;
        const filterQuery = filter === "" ? "" : `&&filter=${filter}`;
        return `/?${categoryQuery + pageQuery + perPageQuery + filterQuery}`;
      },
      providesTags: ["Notices"],
    }),

    getNoticesById: builder.query({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),

    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/${noticeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notices"],
    }),

    noticesByCategory: builder.query({
      query: category => ({
        url: `?category=${category}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),

    addNotice: builder.mutation({
      query: ({ formdata, noticeCategory }) => {
        const newFormdata = new FormData();
        Object.keys(formdata).forEach(key => newFormdata.append(key, formdata[key]));
        if (formdata.avatar.length > 0) {
          newFormdata.set("avatar", formdata.avatar[0]);
        } else {
          newFormdata.set("avatar", "");
        }
        return { url: `?category=${noticeCategory}`, method: "POST", body: newFormdata };
      },
      invalidatesTags: ["Notices"],
    }),
  }),
});

export const { useGetNoticesByIdQuery, useAddNoticeMutation, useGetNoticesQuery, useDeleteNoticeMutation } = noticesApi;
