import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CharachterList = () => {
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
    return (
        <div className="characters">
            <div className="container">
                <h1 className="text-center my-4">The Rick and Morty Characters</h1>
                <div className="d-flex flex-wrap row g-5">
                    {characters.map((item) => (
                        <div className="col-12 col-sm-6 col-md-3 text-center" key={item.id}>
                            <img
                                src={item.image}
                                alt="character"
                                width="200px"
                                className="rounded-circle"
                            />
                            <h3 className="char-name mt-2">{item.name}</h3>
                            <p className="char-specie mb-0">{item.species}</p>
                            <Link to={`/${item.id}`} className="char-details text-decoration-none text-success">Read more <span>&rarr;</span></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharachterList;
