import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import Station from './Station';

function Catalog() {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        console.log('Run useEffect');
        fetch('http://localhost:8000/catalog/').then(res => res.json()).then(data => setCatalog(data));
    }, []);

    return (
        <Container className='py-5'>
            <Row>
                <Col sm={3}>
                    <ul>
                        <li>Stations</li>
                        <li>Parameters</li>
                        <li>Charts</li>
                        <li>Logs</li>
                    </ul>
                </Col>
                <Col sm={9}>
                    <Row>
                        {!catalog.length ? <div>No station</div> : catalog.map(
                            (el, index) => <Station key={index} {...el} />
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Catalog;