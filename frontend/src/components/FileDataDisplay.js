import React, { useState } from 'react';

export default function FileDataDisplay() {

    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const fileReader = new FileReader();

    const handleOnChange = (data) => {
        setFile(data.target.files[0]);
        console.log("file handle ")
        console.log(file);
    };

    const fileDataToArray = string => {

        const fileHeader = string.slice(0, string.indexOf("\n")).split(",");
        const fileRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = fileRows.map(i => {
            const values = i.split(",");
            const obj = fileHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);

    };
    const handleOnSubmit = (value) => {
        value.preventDefault();
        if (file) {
            console.log("yes received file");
            fileReader.onload = function (event) {
                const text = event.target.result;
                fileDataToArray(text);

            }
            fileReader.readAsText(file);
        }
        console.log(array);
    }

    const headerKeys = Object.keys(Object.assign({}, ...array));


    return (

        <>
            <div className='col-8'>
                <input className="p-5 " accept='.csv' id="csvFile" onChange={handleOnChange} type="file" />
                <button type="button" className="btn btn-outline-success " onClick={(data) => { handleOnSubmit(data); }}>Submit</button>
            </div>
            <table className="table table-bordered p-0">
                <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {array.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>


        </>

    )
}