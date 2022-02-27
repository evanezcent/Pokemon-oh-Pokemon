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
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#905F63",
    unkown: "#6AA596",
  },
};
