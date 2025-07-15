import axios from "axios"
import { useState, useEffect } from "react";

const BASE_URL = "https://ih-crud-api.herokuapp.com";

function HomePage(){

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(BASE_URL + "/characters")
            .then( (response) => {
                setCharacters(response.data)
            })
            .catch( e => console.log("Error getting characters from the API", e))
            .finally( () => setIsLoading(false))
    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Number of characters: {characters.length}</h2>

            {characters.map((characterObj, index) => {                
                return (
                    <div key={index} className="box">
                        <p>{characterObj.name}</p>
                        <p>Occupation: {characterObj.occupation}</p>
                        <p>Weapon: {characterObj.weapon}</p>
                    </div>
                )
            })}
        </>
    )
}

export default HomePage