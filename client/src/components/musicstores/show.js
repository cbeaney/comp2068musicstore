import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
    const [musicstores, setMusicstores] = useState({});

    useEffect(() => {
        Axios.get(`/api/musicstores/${props.match.params.id}`)
        .then(result => setMusicstores(result.data))
        .catch(err => console.error(err));
    }, [props]);

    return (
        <div className="showBackground">
        <div className="container">
            <header>
                <h1 className = "formTitle">{musicstores.title}</h1>
            </header>
            <div className = "formElements">
                <div>{musicstores.genre}</div>
                <div>{musicstores.album}</div>
                <div>{musicstores.artist}</div>
                <div>{musicstores.price}</div>
            </div>
        </div>
        </div>
    );
}

export default Show;