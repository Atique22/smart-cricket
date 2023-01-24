import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Chart() {

    return (
        <>
            
            <Card  className='m-3 p-4 w-full'>
                <Card.Body>
                    <Card.Title>Graph </Card.Title>
                    
                    <canvas id="myChart" style={{width:'100%'}}>
                    <span
                        type="bar"
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [
                            {
                                label: 'GitHub Commits',
                                backgroundColor: '#f87979',
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                            },
                            ],
                        }}
                        labels="months"
                        />ß
                    </canvas>
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