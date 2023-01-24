import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LineGraph from './LineGraph'
function Chart() {

    return (
        <>

            <Card className='m-3 p-4'>
                <Card.Body>
                    <Card.Title>Graph </Card.Title>
                        <LineGraph />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary m-2">Upload</Button>
                    <Button variant="primary  m-2">Upload</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Chart;