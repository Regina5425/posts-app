import Button from "react-bootstrap/Button";

const Sort = ({ sort, onSortChange }) => {

  return (
    <>
      {sort ? (
        <Button
          style={{ width: "20%", height: "10%" }}
          variant='secondary'
          onClick={() => onSortChange(false)}
        >
          Убрать сортировку
        </Button>
      ) : (
        <Button
          style={{ width: "20%", height: "10%" }}
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
