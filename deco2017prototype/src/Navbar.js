import "./App.css";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

function NavBar() {
    return (
    <div className="navigationbar">
        <Stack direction="horizontal" gap={5}>
            <div className="logo">BookStack</div>
            <Form.Control className="ms-auto" placeholder="Search for a book" />
            <Button className="btn-primary">Add a new book</Button>
      </Stack>

    </div>
    );
};

export default NavBar;

//className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"

/*  Button Style
<div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
        >
        Add a new book
        </button>
        </div> */

/*

<div logo="mt-5 px-3 py-4">
      <h1 className="logo">BookStack</h1>
      <Button className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2">Add a new book</Button>
    </div> */
    