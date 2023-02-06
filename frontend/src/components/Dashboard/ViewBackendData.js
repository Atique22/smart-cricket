import React from 'react';

export default function BackendViewData() {

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
                            <tr>
                                <th scope="row">1</th>
                                <td className="w-25">
                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                                </td>
                                <td>Bootstrap 4 CDN and Starter Template</td>
                                <td>Cristina</td>
                                <td>913</td>
                                <td>2.846</td>
                                <td>Edit</td>
                                <td>Delete</td>
                                <td>View</td>
                                
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td className="w-25">
                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                                </td>
                                <td>Bootstrap Grid 4 Tutorial and Examples</td>
                                <td>Cristina</td>
                                <td>1.434</td>
                                <td>3.417</td>
                                <td>Edit</td>
                                <td>Delete</td>
                                <td>View</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}