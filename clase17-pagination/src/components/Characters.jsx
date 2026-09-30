import { useState, useEffect } from "react";
import { BASE_URL } from "../api/api";
import Character from "./Character";

const Characters = () => {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPersonajes = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");

                const data = await response.json();

                setPersonajes(data.results);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPersonajes();
    }, []);

    if (loading) {
        return <h2>Cargando personajes...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Personajes</h1>

            {personajes.map((personaje) => (
                <Character
                    key={personaje.id}
                    personaje={personaje}
                />
            ))}
        </div>
    );
};
export default Characters