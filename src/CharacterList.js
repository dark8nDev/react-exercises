import React from "react";
import { CharacterProfile } from "./CharacterProfile";
import './CharacterList.css'

function CharacterList() {

    const BASE_URL = 'https://rickandmortyapi.com/api'
    const [characters, setCharacters] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const fetchCharacters = async () => {
        try {
            const response = await fetch(`${BASE_URL}/character`);
            const data = await response.json();
            return data
        } catch (error) {
            console.error('Error fetching data:', error);
            //   throw error
        }
        finally {
            setLoading(false)
        }
    };

    React.useEffect(() => {
        fetchCharacters()
            .then(data => setCharacters(data))
    }, [])

    return (
        <div className="character-list">
            {loading ? (
                <p>Loading ...</p>
            ) : (
                characters.results.map(character => (
                    <CharacterProfile
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        image={character.image}
                    />
                ))
            )}
        </div>
    );
}

export { CharacterList }