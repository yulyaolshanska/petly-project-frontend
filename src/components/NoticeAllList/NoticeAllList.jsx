import { useEffect, useState } from "react";
import { useGetNoticesQuery } from "redux/noticesApi";
import { List } from "components/NoticesCategoriesList/NoticesCategoriesList.styled";
import NoticeCategoryItem from "components/NoticeCategoryItem";
import { NotFoundBox, NotFound } from "pages/NewsPage/NewsPage.styled";
import Loader from "components/Loader";
import { PaginationButton, PaginationButtonContainer } from "components/Button/Button.styled";

const NoticeAllList = ({
  getIsLastPage,
  handlePrevClick,
  handleNextClick,
  filter,
  category,
  perPage,
  page,
  favoriteNoticeId,
  notieceId,
  currentPage,
}) => {
  const [isLastPage, setIsLastPage] = useState(false);
  const [noti, setNoti] = useState([]);
  const { data = [], isLoading } = useGetNoticesQuery({ filter, category, perPage, currentPage });

  useEffect(() => {
    if (!data) {
      return;
    }
    setNoti(data.notices);
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

        {!isLoading ? (
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
        ) : (
          <Loader />
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

export default NoticeAllList;
