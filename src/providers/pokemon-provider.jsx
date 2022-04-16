import React, { useEffect, useState } from "react";
import { loadData, saveData } from "../storages/my-pokemon-storage";

const DataPokemonContext = React.createContext(null);

function useContextData() {
  const context = React.useContext(DataPokemonContext);
  return context;
}

function DataProvider({ children, ...props }) {
  const [dataPokemon, setDataPokemon] = useState([]);

  const setAllData = (data) => {
    setDataPokemon(data);
    saveData(data);
  };

  const addPokemonData = (pokemon) => {
    const newPayload = {
      id: pokemon.id,
      name: pokemon.name,
      nick_name: pokemon.nick_name,
      img: pokemon.sprites.front_default,
      types: pokemon.types.map((type) => type.type.name),
    };

    const payload = [...dataPokemon, newPayload];
    setAllData(payload);
  };

  const releasePokemon = (idx) => {
    console.log(idx)
    const tempData = [...dataPokemon];
    tempData.splice(idx, 1);
    
    console.log(tempData)

    setAllData(tempData);
  };

  const resetPokemon = () => {
    setAllData([]);
  };

  useEffect(() => {
    const localData = loadData();
    if (localData) {
      setDataPokemon(localData);
    }
  }, []);

  return (
    <DataPokemonContext.Provider
      value={{ dataPokemon, addPokemonData, releasePokemon, resetPokemon }}
      {...props}
    >
      {children}
    </DataPokemonContext.Provider>
  );
}

export { useContextData, DataProvider };
