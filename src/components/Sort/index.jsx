import Button from "react-bootstrap/Button";

const Sort = ({ sort, onSortChange }) => {
  return (
    <>
      {sort ? (
        <Button
          className='sort-btn'
          variant='secondary'
          onClick={() => onSortChange(false)}
        >
          Убрать сортировку
        </Button>
      ) : (
        <Button
          className='sort-btn'
          variant='dark'
          onClick={() => onSortChange(true)}
        >
          Отсортировать посты
        </Button>
      )}
    </>
  );
};

export default Sort;
