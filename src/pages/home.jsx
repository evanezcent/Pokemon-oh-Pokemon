import { css } from "@emotion/css";
import { FloatBag } from "../components/float-bag";
import { PokemonCard } from "../components/pokemon-card";

export const Home = () => {
  const p_list_style = css`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; 
  `;

  const dummy = [
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
    <PokemonCard />,
  ];

  return (
    <>
      <div className={p_list_style}>{dummy}</div>
      <FloatBag />
    </>
  );
};
