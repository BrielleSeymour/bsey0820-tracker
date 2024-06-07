import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checked, setChecked] = useState(false);

  // Slider value display
  const [sliderValue, setSliderValue] = useState("2024");
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  }
  
  
  
  let genres = [
    { name: 'Fantasy', value: '1' },
    { name: 'Science Fiction', value: '2' },
    { name: 'Dystopian', value: '3' },
    { name: 'Action', value: '4' },
    { name: 'Mystery', value: '5' },
    { name: 'Thriller', value: '6' },
    { name: 'Romance', value: '7' },
    { name: 'Biography', value: '8' },
    { name: 'Memoir', value: '9' },
    { name: 'Non-fiction', value: '10' },
    { name: 'Novel', value: '11' },
    { name: 'Humor', value: '12' },
  ];

  return (
    <>
      <Button variant="primary" size="sm" className="d-grid col-1 py-1" onClick={handleShow}>
        Add a new book
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" id="book-name" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                required="true"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <>
              <Form.Label>Year Published</Form.Label>
                <Form.Range 
                  min="1700"
                  max="2024"
                  value={sliderValue}
                  name='hello'
                  onChange={handleSliderChange}
                  className="custom-slider"/>
                <p>{sliderValue}</p>
              </>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number of Pages</Form.Label>
              <Form.Control
                type="number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Genres</Form.Label>
              <br></br>
              <ToggleButton
                className="genre-tag"
                size='sm'
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                {genres[0].name}
              </ToggleButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>I have started reading</Form.Label>
                <Form.Check
                type="switch"
                id="custom-switch"
                //label="I have started reading"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date Started</Form.Label>
              <Form.Control
                type="date"
              />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Example;