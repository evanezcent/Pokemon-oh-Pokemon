import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { network } from "../../utils/network";
import { PokemonBadge } from "../pokemon-badge";

export const MyPokemonCard = ({ data }) => {
  const card = css`
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    background-image: linear-gradient(
      45deg,
      hsl(162deg 50% 80%) 0%,
      hsl(172deg 52% 80%) 11%,
      hsl(181deg 53% 80%) 22%,
      hsl(188deg 63% 81%) 33%,
      hsl(194deg 71% 83%) 44%,
      hsl(200deg 77% 85%) 56%,
      hsl(206deg 80% 87%) 67%,
      hsl(213deg 79% 88%) 78%,
      hsl(222deg 73% 90%) 89%,
      hsl(236deg 61% 91%) 100%
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
    text-decoration: none;
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
    color: #212129;
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
    <Link to={`/pokemon/${data.name}`} className={card}>
      {pokemon ? (
        <div className={image_box}>
          <img className={image} src={pokemon.sprites.front_default} alt="" />
        </div>
      ) : (
        <div className={image_box_loading}></div>
      )}

      <h1 className={title}>{data.nick_name ?? ""}</h1>
      <div className={badge_list}>
        {pokemon ? (
          pokemon.types.map((item, idx) => (
            <PokemonBadge key={idx} pokemon_type={item.type.name} />
          ))
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
};
