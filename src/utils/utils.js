/* eslint-disable no-unused-vars */

export const utils = {
  twoDigit(numberStr) {
    const temp = `0${numberStr}`;
    return temp.slice(-2);
  },

  parseObject(data, keyIndex, value) {
    Object.keys(data).forEach((key) => {
      if (keyIndex.toLowerCase() === key.toLowerCase()) {
        data[key] = value;
        return;
      }
    });
    return data;
  },

  checkEmptyValue(value) {
    return value === "" || value === null || value.length === 0;
  },
};

export const pokemonColor = {
  color: {
    normal: "#72797a",
    fire: "#fc1d00",
    water: "#007bff",
    grass: "#00cc33",
    electric: "#c2db21",
    ice: "#8cd9ff",
    fighting: "#f20041",
    poison: "#00471d",
    ground: "#471800",
    flying: "#0497b8",
    psychic: "#495e5c",
    bug: "#69386b",
    rock: "#1b1c1c",
    ghost: "#0f2324",
    dark: "#141414",
    dragon: "#ff0000",
    steel: "#454545",
    fairy: "#59ebb3",
    unkown: "#000000",
  },
};
