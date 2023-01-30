import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayCard({fileData}) {
   
    return (
        <>

            <Card className='m-2 col-sm-10'>
                <Card.Body>
                    <Card.Title>Title: {fileData?.fileName}, Date: {fileData?.fileDate}</Card.Title>
                    {/* <video src= {fileData?.dataFile} controls width="100%">
                        date: {fileData?.fileDate}
                    </video> */}
                     <video src= "https://www.youtube.com/embed/d15DP5zqnYE"  type="video/mp4" controls width="100%">
                        date: {fileData?.fileDate}
                    </video>
                    {/* {props.component} */}
                    <Card.Text>{fileData?.dataFile}
                    </Card.Text>
                    <Button variant="primary m-2">Pie Chart</Button>
                    <Button variant="primary  m-2">Line Chart</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default DisplayCard;