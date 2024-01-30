import React from "react";
import { CharacterProfile } from "./CharacterProfile";
import { Search } from "./Search";
import './CharacterList.css'

function CharacterList() {

    const BASE_URL = 'https://rickandmortyapi.com/api'

    const [searchOption, setSearchOption] = React.useState('')
    const [searchText, setSearchText] = React.useState('')
    const [apiData, setApiData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const saveSearchOption = (option) => {
        setSearchOption(option)
    }

    const saveSearchText = (text) => {
        setSearchText(text)
    }

    const makeAPIRequest = () => {
        setLoading(true)
        fetchData(searchOption)
            .then(data => setApiData(data))
    }

    const fetchData = async (resourceType = 'character') => {
        try {
            const response = await fetch(`${BASE_URL}/${resourceType}`);
            const data = await response.json();
            console.log(data)
            return data
        } catch (error) {
            console.error('Error fetching data:', error);
            //   throw error
        }
        finally {
            setLoading(false)
        }
    };

    const renderComponents = (resourceType) => {
        switch (resourceType) {
            case 'character':
                return apiData.results.map(character => (
                    <CharacterProfile
                        key={character.id}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        image={character.image}
                    />
                ))
            default:
                return <div>Pendiente ...</div>
        }
    }

    React.useEffect(() => {
        fetchData()
            .then(data => setApiData(data))
    }, [])

    return (
        <>
            <Search
                searchOption={searchOption}
                searchText={searchText}
                saveSearchOption={saveSearchOption}
                saveSearchText={saveSearchText}
                makeAPIRequest={makeAPIRequest}
            />
            <div className="character-list">
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    // characters.results.map(character => (
                    //     <CharacterProfile
                    //         key={character.id}
                    //         name={character.name}
                    //         species={character.species}
                    //         status={character.status}
                    //         image={character.image}
                    //     />
                    // ))
                    renderComponents(searchOption)
                )}
            </div>
        </>
    );
}

export { CharacterList }