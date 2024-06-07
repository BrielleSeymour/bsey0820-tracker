import "./App.css";
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Example from "./form";

function NavBar() {
    return (
    <div className="navigationbar">
        <Stack direction="horizontal" gap={5}>
            <div className="logo">BookStack</div>
            <Form.Control className="me-auto" placeholder="Search your library" />
            <Example className="me-auto"/>
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
    