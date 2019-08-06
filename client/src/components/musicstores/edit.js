import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit (props) {
    const [inputs, setInputs] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`/api/musicstores/${props.match.params.id}`)
        .then(result => setInputs(result.data))
        .catch(err => console.error(err));
    }, [props]);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(
            "Title: " + inputs.title,
            ", Genre: " + inputs.genre,
            ", Album: " + inputs.album,
            ", Artist: " + inputs.artist,
            ", Price: " + inputs.price
        );

        console.log("The ID is: " + props.match.params.id)

        Axios.post("/api/musicstores/update", {
            id: props.match.params.id,
            musicstore: {
                title: inputs.title,
                genre: inputs.genre,
                album: inputs.album,
                artist: inputs.artist,
                price: inputs.price
            }
        })
        .then(() => setRedirect(true))
        .catch(err => console.error(err));
    }

    function handleInputChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
    
        setInputs(inputs => {
          inputs[name] = value;
          return inputs;
        });
      }

    if (redirect) return <Redirect to="/musicstores" />

    return (
        <div className="formBackground">
      <div className="container">
            <header>
                <h1 className = "formTitle">Edit Song</h1>
            </header>
      <div>
        <form action="/musicstores" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
                        <label className="formElements">Title</label>
                        <input className="form-control" name="title" required={true} onChange={handleInputChange} defaultValue={inputs.title} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Genre</label>
                        <input className="form-control" name="genre" required={false} onChange={handleInputChange} defaultValue={inputs.genre} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Album</label>
                        <input className="form-control" name="album" required={false} onChange={handleInputChange} defaultValue={inputs.album} />
                    </div>

                    <div className="form-group">
                        <label className="formElements">Artist</label>
                        <input className="form-control" name="artist" required={false} onChange={handleInputChange} defaultValue={inputs.artist}/>
                    </div>

                    <div className="form-group">
                        <label className="formElements">Price</label>
                        <input className="form-control" name="price" required={true} onChange={handleInputChange} defaultValue={inputs.price}/>
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

export default Edit;