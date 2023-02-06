import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function BackendViewData() {

    const [trainingData, setTrainingData] = useState([]);
    useEffect(() => {
        async function getAllTrainingData() {
            try {
                const dataGet = await axios.get("http://127.0.0.1:8000/training/");
                // console.log("student data is: " + students.data);
                setTrainingData(dataGet.data);
            } catch (error) {
                console.log("errors occurs: " + error);
            }
        }
        getAllTrainingData();
    }, [])
    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className="table table-image">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Frame</th>
                                <th scope="col">Article Name</th>
                                <th scope="col">comments</th>
                                <th scope="col">Words</th>
                                <th scope="col">Shares</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainingData.map((trainingData, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{trainingData.id}</th>
                                        <td className="w-25">
                                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                                        </td>
                                        <td>Bootstrap 4 CDN and Starter Template</td>
                                        <td>{trainingData.Name}</td>
                                        <td>{trainingData.Date}</td>
                                        <td>2.846</td>
                                        <td>Edit</td>
                                        <td>Delete</td>
                                        <td>View</td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}