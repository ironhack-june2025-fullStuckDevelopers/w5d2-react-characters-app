import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

function CharacterDetails(){

    const BASE_URL = "https://ih-crud-api.herokuapp.com";

    const {characterId} = useParams()

    const [character, setCharacter] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(BASE_URL + "/characters/" + characterId)
            .then((response) => {
                setCharacter(response.data)
            })
            .catch(e => console.log("Error getting character details from the API...", e))
            .finally( () => setIsLoading(false))
    }, [])
    
    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <div className="box">
                <h2>{character.name}</h2>
                <p>Occupation: {character.occupation}</p>
                <p>Weapon: {character.weapon}</p>
                <p>Debt: {character.debt ? "Yes" : "No"}</p>
            </div>

            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    )
}

export default CharacterDetails