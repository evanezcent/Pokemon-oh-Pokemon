import { css } from "@emotion/css";

export const PokemonBadge = ({ type }) => {
  const style = css`
    border-radius: 20px;
    padding: 2px 10px;
    background-color: white;
    color: #2d6ab3;
    width: fit-content;
    font-size: 10px;
    margin: 0 3px 3px 0;
  `;
  return <div className={style}>{type ?? "APA"}</div>;
};
