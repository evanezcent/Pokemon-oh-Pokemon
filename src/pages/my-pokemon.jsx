import { css } from "@emotion/css";
import { BackButton } from "../components/back-button";
import { MyPokemonCard } from "../components/my-pokemon/my-pokemon-card";
import { useContextData } from "../providers/pokemon-provider";

export const MyPokemon = () => {
  const p_list_style = css`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    gap: 1rem;
  `;

  const title = css`
    color: white;
    font-weight: bold;
    text-align: center;
  `;

  const { dataPokemon, releasePokemon } = useContextData();

  const handleReleasePokemon = (idx) => {
    releasePokemon(idx);
  };

  return (
    <>
      <div>
        <h1 className={title}>MY POKEMON</h1>
      </div>
      <div className={p_list_style}>
        {dataPokemon.length > 0 ? (
          dataPokemon.map((item, idx) => (
            <MyPokemonCard
              key={idx}
              data={item}
              callbackDelete={() => handleReleasePokemon(idx)}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <BackButton />
    </>
  );
};
