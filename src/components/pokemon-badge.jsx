import { css } from "@emotion/css";
import { pokemonColor } from "../utils/utils";

export const PokemonBadge = ({ pokemon_type }) => {
  const style = css`
    border-radius: 20px;
    padding: 2px 10px;
    background-color: ${pokemonColor.color[pokemon_type]};
    color: white;
    width: fit-content;
    font-size: 10px;
    margin: 0 3px 3px 0;
    text-transform: uppercase;
    font-weight: 600;
  `;

  const style_loading = css`
    border-radius: 20px;
    height: 18px;
    width: 40px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
    color: #2d6ab3;
    font-size: 10px;
    margin: 0 3px 3px 0;
  `;
  return pokemon_type ? (
    <div className={style}>{pokemon_type}</div>
  ) : (
    <div className={style_loading}></div>
  );
};
