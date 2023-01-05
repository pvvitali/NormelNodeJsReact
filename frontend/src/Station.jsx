import { Card, Button, Col } from "react-bootstrap";

function Station(props) {

    const { page } = props;


    return (
        <Col sm={4} className='mt-4'>
            <Card>
                <Card.Img variant="top" src="https://f1.lpcdn.site/f9dc575201715050f5f122c1206b5cb3/7d77f82961ee8e1d333b8ecdf5c4e465.png" />
                <Card.Body>
                    <Card.Title>{page}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content. ABC.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Station;