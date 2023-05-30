import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className='d-flex justify-content-center m-5'>
      <Spinner animation='border' role='status' variant='dark'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
