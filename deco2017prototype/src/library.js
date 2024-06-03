import "./App.css";
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

function Library() {
    return (
        <Stack gap={3}>
            <div className="shelf-container">
                <div className="list-title">Currently reading</div>
                <div className="book-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>The Beach</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">By Alex Garland</Card.Subtitle>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="shelf-container">
                <div className="list-title">Finished Reading</div>
                <div className="book-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>The Beach</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">By Alex Garland</Card.Subtitle>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="shelf-container">
                <div className="list-title">Want to read</div>
                <div className="book-card">
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>The Beach</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">By Alex Garland</Card.Subtitle>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </Stack>
    );
};

export default Library;