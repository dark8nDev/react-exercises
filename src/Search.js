import React from "react";
import './Search.css'

function Search(props) {

    const handleSunbmit = (e) => {
        e.preventDefault()
        props.makeAPIRequest()
    }

    return (
        <form onSubmit={handleSunbmit}>
            <select
                name="options-list"
                value={props.searchOption}
                onChange={(e) => props.saveSearchOption(e.target.value)}
            >
                <option value=''>Seleccionar opcion</option>
                <option value='character'>Personajes</option>
                <option value='location'>Ubicaciones</option>
                <option value='episode'>Episodios</option>
            </select>

            <input
                type="text"
                value={props.searchText}
                onChange={(e) => props.saveSearchText(e.target.value)}
            />

            <button type="submit">Consultar</button>
        </form>
    );
}

export { Search }