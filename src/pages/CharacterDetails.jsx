import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const comingData = async () => {
            const response = await axios.get(
                "https://rickandmortyapi.com/api/character"
            );
            setCharacters(response.data.results);
        };
        comingData();
    });

    const { url } = useParams();

    const details = characters.find(c => c.id == url);

    return (
        <>
            {details === undefined ? <h1>Loading...</h1> : <div className="container col-xxl-8 px-4 py-5">
                <div className="details-card row d-flex justify-content-center align-items-center g-5 my-5 py-4">
                    <div className="col-12 col-sm-6 col-md-6 mt-0">
                        <img src={details.image} className="d-block" alt="Bootstrap Themes" width={450} height={450} loading="lazy" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 char-info text-center mt-0">
                        <h1 className="fw-bold mb-3">{details.name}</h1>
                        <p className="lead mb-0"><span>Species:</span> {details.species}</p>
                        <p className="lead mb-0"><span>Gender:</span> {details.gender}</p>
                        <p className="lead mb-3"><span>Location Name:</span> {details.location.name}</p>
                        <Link to="/characters" className="btn btn-outline-success px-4">Back</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CharacterDetails