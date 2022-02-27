import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { network } from "../utils/network";
import { PokemonBadge } from "./pokemon-badge";

export const PokemonCard = ({ data }) => {
  const card = css`
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    background-image: linear-gradient(
      45deg,
      hsl(346deg 96% 89%) 0%,
      hsl(337deg 88% 86%) 11%,
      hsl(328deg 77% 83%) 22%,
      hsl(316deg 64% 79%) 33%,
      hsl(300deg 50% 75%) 44%,
      hsl(281deg 61% 75%) 56%,
      hsl(263deg 72% 75%) 67%,
      hsl(245deg 83% 76%) 78%,
      hsl(226deg 94% 71%) 89%,
      hsl(207deg 100% 50%) 100%
    );
    box-shadow: 0px 0px 10px 0px rgba(107, 147, 224, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(107, 147, 224, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(107, 147, 224, 0.75);
    transition: all 300ms;
    max-height: 180px;
    &:hover {
      transform: scale(1.02);
      transition: all 300ms;
    }
  `;

  const image_box = css`
    width: 70px;
    height: 70px;
    margin: auto;
  `;

  const image_box_loading = css`
    width: 70px;
    height: 70px;
    margin: auto;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  `;

  const image = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  const title = css`
    text-align: center;
    font-size: 18px;
    text-transform: capitalize;
  `;

  const badge_list = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 42px;
    overflow: hidden;
  `;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    network.get(
      `pokemon/${data.name}/`,
      {},
      (data) => {
        setPokemon(data);
      },
      (err) => {},
      () => {}
    );

    return;
  }, [data]);

  return (
    <div className={card}>
      {pokemon ? (
        <div className={image_box}>
          <img className={image} src={pokemon.sprites.front_default} alt="" />
        </div>
      ) : (
        <div className={image_box_loading}></div>
      )}

      <h1 className={title}>{data.name ?? ""}</h1>
      <div className={badge_list}>
        {pokemon ? (
          pokemon.types.map((item, idx) => (
            <PokemonBadge pokemon_type={item.type.name} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
