import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function New () {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    function handleInputChange (event) {
        event.persist();
        const { name,value } = event.target;

        setInputs(inputs => {
            return {
                ...inputs, 
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        Axios.post("/api/musicstores", {
            musicstore: {
                title: inputs.title,
                genre: inputs.genre,
                album: inputs.album,
                artist: inputs.artist,
                price: inputs.price
            }
        })
        .then(() => setRedirect(true))
        .catch(err => console.log(err));
    }

    if (redirect) return <Redirect to="/musicstores" />;

    return (
        <div className="formBackground">
        <div className="container">
            <header>
                <h1 className = "formTitle"> New Song Entry </h1>
            </header>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="formElements">Title</label>
                        <input className="form-control" name="title" required={true} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Genre</label>
                        <input className="form-control" name="genre" required={false} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Album</label>
                        <input className="form-control" name="album" required={false} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Artist</label>
                        <input className="form-control" name="artist" required={false} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Price</label>
                        <input className="form-control" name="price" required={true} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default New;