import React, { useRef, useEffect, useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
// import InputVideoData from '../UploadFiles/InputVideoData';

function DisplayCard({ fileData, source }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const [showFrame,setShowFrame] = useState(false);
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
        setComments([...comments, { timestamp: currentTime, text: newComment }]);
        setNewComment("");
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
                        <button type="button" class="btn m-2 btn-outline-secondary" onClick={() => setShowFrame(s => !s)}>Show Frame</button>
                    </div>
                </Card.Body>

                <div style={{display: showFrame ? "block" : "none"}} >
                    <canvas ref={canvasRef} width={1100} height={800} />
                    <ul>
                        {comments.filter(({ timestamp }) => timestamp === currentTime)
                            .map(({ text }, index) => (
                                <li key={index}>{text}</li>
                            ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                        />
                        <button type="submit">Add Comment</button>
                    </form>
                </div>
            </Card>
        </>
    );
}

export default DisplayCard;