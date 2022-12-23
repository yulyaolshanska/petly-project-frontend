import { useDispatch, useSelector } from "react-redux";
import ModalAddNotice from "components/ModalAddNotice/ModalAddNotice";
import Modal from "components/Modal/Modal";
import ModalNotice from "components/ModalNotice";
import { useEffect, useState } from "react";
import NoticeAllList from "components/NoticeAllList";
import NoticeFavList from "components/NoticeFavList/NoticeFavList";
import NoticeMyList from "components/NoticeMyList";
import { noticeActions } from "redux/notices/noticeSlice";

const NoticesCategoriesList = () => {
  const modalAddNoticeState = useSelector(({ notice }) => notice.modalAddNotice.active);
  const modalViewNotice = useSelector(({ notice }) => notice.modalViewNotice.active);
  const page = useSelector(({ notice }) => notice.page);
  const perPage = useSelector(({ notice }) => notice.per_page);
  const category = useSelector(({ notice }) => notice.category);
  const filter = useSelector(({ notice }) => notice.filter);
  let favoriteNoticeId = useSelector(({ user }) => user.favorite);
  let notieceId = useSelector(({ user }) => user.userNotice);
  const token = useSelector(({ auth }) => auth.token);
  const [currentPage, setCurrentPage] = useState(page);
  const dispatch = useDispatch();
  const [categorySelect, setcategorySelect] = useState();

  useEffect(() => {
    setcategorySelect(category);
    setCurrentPage(1);
  }, [category]);

  const handlePrevClick = async () => {
    setCurrentPage(currentPage - 1);
    dispatch(noticeActions.changePage(currentPage - 1));
  };

  const handleNextClick = async () => {
    setCurrentPage(currentPage + 1);
    dispatch(noticeActions.changePage(currentPage + 1));
  };

  return (
    <>
      {token && categorySelect === "my_adds" && (
        <NoticeMyList filter={filter} category={categorySelect} perPage={perPage} page={page} favoriteNoticeId={favoriteNoticeId} />
      )}

      {token && categorySelect === "favorite" && (
        <NoticeFavList
          filter={filter}
          category={categorySelect}
          perPage={perPage}
          page={page}
          favoriteNoticeId={favoriteNoticeId}
          notieceId={notieceId}
          currentPage={currentPage}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}
      {(categorySelect === "sell" || categorySelect === "in_good_hands" || categorySelect === "lost_found") && (
        <NoticeAllList
          filter={filter}
          category={categorySelect}
          perPage={perPage}
          page={page}
          favoriteNoticeId={favoriteNoticeId}
          notieceId={notieceId}
          currentPage={currentPage}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}
      {modalAddNoticeState && (
        <Modal modalName={"modalAddNotice"} bigHeight>
          <ModalAddNotice />
        </Modal>
      )}
      {modalViewNotice && (
        <Modal modalName={"modalViewNotice"}>
          <ModalNotice />
        </Modal>
      )}
    </>
  );
};

export default NoticesCategoriesList;
