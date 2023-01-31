import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DisplayCard from '../Dashboard/DisplayCard';

function InputVideoData() {
    const [show, setShow] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [source, setSource] = React.useState();
    const [fileData, setFileData] = useState({
        fileName: 'File Name Here',
        fileDate: 'File Date Here',
        dataFile: "https://youtu.be/4HV7jkpkF2U"
    });



    const handleChange = (event) => {

        setFileData({ ...fileData, [event.target.name]: event.target.value });
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleSubmit = (event) => {
        setShowInput(true);
        event.preventDefault();
        // fileData.dataFile = URL.createObjectURL(fileData.dataFile)
        console.log(fileData);
        // You can submit the form data to the server using APIs or any other means.
        setShow(false);
    };

    return (
        <>{!source && (showInput === false) ?
            (<>
                <div className='row h-100 m-5'>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <button className='btn btn-outline-light border-0' onClick={handleShow}>
                            <div className="container-file">
                                <h1>Upload a file</h1>
                                <div className="upload-container">
                                    <div className="border-container">
                                        <p>Click here, upload file from
                                            <b> browse</b> your computer.</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Source Data Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    name='fileName'
                                    placeholder="Enter Name"
                                    autoFocus
                                    onChange={handleChange}
                                />
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name='fileDate'
                                    onChange={handleChange}
                                    autoFocus
                                />
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control
                                    type="file"
                                    name='dataFile'
                                    onChange={handleChange && handleFileChange}
                                    autoFocus
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal></>) : (
                <DisplayCard fileData={fileData}  source={source}/>
            )}

        </>
    );
}

export default InputVideoData;