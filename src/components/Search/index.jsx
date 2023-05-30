import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Close from "../../assets/close.svg";
import { searchPosts, resetState } from "../../redux/search";

const Search = ({inputValue}) => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const resetValue = () => {
    dispatch(resetState());
    setSearchValue("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      return;
    }

		setSearchValue(e.target.value)

    dispatch(searchPosts(e.target.value));
  };

	useEffect(() => {
		setSearchValue(inputValue);
		// eslint-disable-next-line
	}, [])

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
