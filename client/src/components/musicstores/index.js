import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Index () {
    const [musicstores, setMusicstores] = useState([]);

    useEffect(() => {
        Axios.get("/api/musicstores")
            .then(result => setMusicstores(result.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="indexBackground">
            <div className="container"> 
            <header>
                <h1 className="formTitle">All Songs</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr className="formElements">
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {musicstores.map(musicstore => (
                            <tr key={musicstore._id}>
                                <td>
                                    <Link to={`/musicstores/${musicstore._id}`}>{musicstore.title}</Link>
                                </td>
                                <td className="formElements">
                                    <Link to={`/musicstores/${musicstore._id}/edit`}>Edit</Link>
                                    |
                                    <Link to={`/musicstores/${musicstore._id}/destroy`}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Index;