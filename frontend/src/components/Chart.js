import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LineGraph from './LineGraph'
function Chart(props) {

    return (
        <>

            <Card className='m-2 '>
                <Card.Body>
                    <Card.Title>Graph {props.title}</Card.Title>
                        <LineGraph />
                    <Card.Text>{props.description}
                    </Card.Text>
                    <Button variant="primary m-2">Upload</Button>
                    <Button variant="primary  m-2">Upload</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Chart;