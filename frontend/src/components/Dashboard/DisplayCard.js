import React, { useRef, useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
// import InputVideoData from '../UploadFiles/InputVideoData';

function DisplayCard({ fileData, source }) {
    const [showFrame, setShowFrame] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [selectedFrame, setSelectedFrame] = useState(0);
    const [frameStatus, setFrameStatus] = useState("");

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const drawFrame = () => {
            setCurrentTime(video.currentTime);
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawFrame);
        };

        video.addEventListener("play", drawFrame);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setComments([...comments, { timestamp: currentTime, text: newComment, status: frameStatus }]);
        setNewComment("");
        console.log("comment here is with time:"+comments+" time: "+currentTime)
        console.log("frameStatus here is with time:"+frameStatus+" time: "+currentTime)
        console.log("selectedFrame here is with time:"+selectedFrame+" time: "+currentTime)
    };
    return (
        <>
            <Card className='m-4 p-1 col-10 position-absolute top-10 end-0'>
                <CloseButton />
                <Card.Body>
                    <div className="card-header">
                        Title: {fileData?.fileName}
                    </div>
                    <Card.Title>

                    </Card.Title>
                    <video ref={videoRef} src={source} type="video/mp4" controls width="100%">
                        file: {source}
                    </video>
                    <Card.Text>
                        file link : {source}
                    </Card.Text>
                    <div className="card-footer text-muted">
                        Date: {fileData?.fileDate}
                        <button type="button" className="btn m-2 btn-outline-secondary" onClick={() => setShowFrame(s => !s)}>Show Frame</button>
                    </div>
                </Card.Body>

                <div style={{ display: showFrame ? "block" : "none" }} >
                    <canvas ref={canvasRef}/>
                    <ul>
                        Description here:
                        {comments.filter(({ timestamp }) => timestamp === currentTime)
                            .map(({ text, status, selectedFrame }, index) => (
                                <li key={index}> time: {currentTime} Comment: {text} Frame: {selectedFrame} Status:({status})</li>
                            ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <input
                                    className="form-control" placeholder="Comment here"
                                    type="text"
                                    value={newComment}
                                    onChange={(event) => setNewComment(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <select className="form-control"
                                    value={selectedFrame}
                                    onChange={(event) => setSelectedFrame(event.target.value)}
                                >
                                    <option value={0}>Frame 0</option>
                                    <option value={1}>Frame 1</option>
                                    <option value={2}>Frame 2</option>
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-control"
                                    value={frameStatus}
                                    onChange={(event) => setFrameStatus(event.target.value)}
                                >
                                    <option value="">Select a status of ball</option>
                                    <option value="Middle">Middle</option>
                                    <option value="Edge">Edge</option>
                                    <option value="Missed">Missed</option>
                                </select>
                            </div>
                            <div className="col">
                                <button className='btn btn-outline-secondary' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Card>
        </>
    );
}

export default DisplayCard;