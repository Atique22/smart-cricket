import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DisplayCard({ fileData, source }) {

    return (
        <>
            <Card className='m-2 p-1 col-10 position-absolute top-10 end-0'>
                <Card.Body>
                    <div className="card-header">
                        Title: {fileData?.fileName}
                    </div>
                    <Card.Title>

                    </Card.Title>
                    <video src={source} type="video/mp4" controls width="100%">
                        file: {source}
                    </video>
                    <Card.Text>
                        file link : {source}
                    </Card.Text>
                    <div className="card-footer text-muted">
                        Date: {fileData?.fileDate}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default DisplayCard;