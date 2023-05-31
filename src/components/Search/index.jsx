import { useEffect, useRef, useState } from "react";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Close from "../../assets/close.svg";

const Search = ({ inputValue, onUpdateSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef();

  const resetValue = () => {
    setSearchValue("");
    onUpdateSearch("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    setSearchValue(newValue);
    onUpdateSearch(newValue);
  };

  useEffect(() => {
    setSearchValue(inputValue);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='search'>
        <Form.Control
          ref={inputRef}
          className='mb-3'
          value={searchValue}
          onChange={handleChange}
          type='text'
          placeholder='Поиск...'
        />
        {searchValue && (
          <Image
            onClick={resetValue}
            className='search-img'
            src={Close}
            alt='удалить значение'
          />
        )}
      </div>
    </>
  );
};

export default Search;
