import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>The Beach</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Alex Garland</Card.Subtitle>
        <Button variant="primary">Star Rating</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;