import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DisplayCard from '../Dashboard/DisplayCard';

function InputVideoData() {
    const [show, setShow] = useState(false);
    const [fileData, setFileData] = useState({
        fileName: 'File Name Here',
        fileDate: 'File Date Here',
        dataFile:  "https://youtu.be/4HV7jkpkF2U"
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        
        setFileData({ ...fileData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        // fileData.dataFile = URL.createObjectURL(fileData.dataFile)
        console.log(fileData);
        // You can submit the form data to the server using APIs or any other means.
        setShow(false);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Upload Source
            </Button>
            {show ? (<>

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
                                    onChange={handleChange}
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
                </Modal> </>) : (
                <DisplayCard fileData={fileData} />
            )}

        </>
    );
}

export default InputVideoData;