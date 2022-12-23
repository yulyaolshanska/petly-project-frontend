import { useEffect, useState } from "react";
import { useGetUserFavoriteQuery } from "redux/userApi";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.styled";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { NotFoundBox, NotFound } from "pages/NewsPage/NewsPage.styled";
import Loader from "components/Loader";
import { PaginationButton, PaginationButtonContainer } from "components/Button/Button.styled";

const NoticeFavList = ({ handlePrevClick, handleNextClick, filter, category, perPage, page, favoriteNoticeId, notieceId, currentPage }) => {
  const [noti, setNoti] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  const { data = [], isLoading } = useGetUserFavoriteQuery({ filter, category, perPage, currentPage });

  useEffect(() => {
    if (!data.data) {
      return;
    }
    setNoti(data.data.result);
  }, [data]);

  useEffect(() => {
    if (noti?.length === 0) {
      return;
    }
    if (noti?.length < 15) {
      setIsLastPage(true);
    } else if (noti?.length >= 15) {
      setIsLastPage(false);
    }
  }, [noti]);

  const setCategory = category => {
    switch (category) {
      case "sell":
        return "Sell";
      case "in_good_hands":
        return "In good hands";
      case "lost_found":
        return "Lost/found";
      default:
        return "No category";
    }
  };
  return (
    <>
      <List>
        {!isLoading && noti?.length === 0 && (
          <NotFoundBox>
            <NotFound>Nothing found. Please, try again.</NotFound>
          </NotFoundBox>
        )}

        {isLoading ? (
          <Loader />
        ) : (
          noti?.map(({ _id, avatar, title, breed, location, birthday, price, name, category }) => (
            <NoticeCategoryItem
              key={_id}
              id={_id}
              image={avatar}
              title={title}
              name={name}
              breed={breed}
              category={setCategory(category)}
              location={location}
              birthday={birthday}
              price={price}
              favoriteNoticeId={favoriteNoticeId}
              notieceId={notieceId}
            />
          ))
        )}
      </List>
      {!isLoading && noti?.length !== 0 && (
        <PaginationButtonContainer>
          <PaginationButton activeBtn={currentPage > 1} disabled={currentPage <= 1} onClick={handlePrevClick}>
            Prev
          </PaginationButton>
          <PaginationButton activeBtn={!isLastPage} disabled={isLastPage} onClick={handleNextClick}>
            Next
          </PaginationButton>
        </PaginationButtonContainer>
      )}
    </>
  );
};

export default NoticeFavList;
