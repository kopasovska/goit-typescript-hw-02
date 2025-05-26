import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  clickHandler: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ clickHandler }) => {
  return (
    <button onClick={clickHandler} type="button" className={css.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;