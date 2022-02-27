import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { FloatBag } from "../components/float-bag";
import { PokemonCard } from "../components/pokemon-card";
import { network } from "../utils/network";

export const Home = () => {
  const p_list_style = css`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `;

  const title = css`
    color: #2d6ab3;
    font-weight: bold;
    text-align: center;
  `;

  const [data, setData] = useState([]);

  useEffect(() => {
    network.get(
      "pokemon",
      {},
      (data) => {
        console.log(data);
        setData(data.results);
      },
      (err) => {},
      () => {}
    );
  }, []);

  return (
    <>
      <div>
        <h1 className={title}>POKEMON</h1>
      </div>
      <div className={p_list_style}>
        {data.length > 0 ? (
          data.map((item, idx) => <PokemonCard key={idx} data={item} />)
        ) : (
          <></>
        )}
      </div>
      <FloatBag />
    </>
  );
};
