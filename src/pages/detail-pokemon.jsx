import { css } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { network } from "../utils/network";
import "react-toastify/dist/ReactToastify.css";
import { useContextData } from "../providers/pokemon-provider";
import { ModalComponent } from "../components/modal";
import { BackButton } from "../components/back-button";

export const DetailPokemon = ({ data }) => {
  const image_box = css`
    width: 200px;
    height: 200px;
    margin: auto;
    cursor: pointer;
    padding-top: 20rem;
  `;

  const image_loading = css`
    width: 100%;
    height: 100%;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  `;

  const image_box2 = css`
    width: 80px;
    height: 80px;
    margin: auto;
    padding-top: 6rem;
    padding-bottom: 1rem;
    animation: scalling 1s ease-in-out infinite;
    cursor: pointer;
  `;

  const image_box3 = css`
    width: 40px;
    height: 40px;
    margin: auto;
    padding-top: 1rem;
    animation: float 2s ease-in-out infinite;
  `;

  const image = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  const bg_pokemon = css`
    background-image: url("/images/bg-min.png");
    background-repeat: no-repeat;
    backkgroud-position: center;
    background-size: cover;
    @media (min-width: 1025px) {
      mask-image: linear-gradient(
        transparent,
        black 0%,
        black 80%,
        transparent 100%
      );
      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent,
        black 0%,
        black 80%,
        transparent 100%
      );
      height: 768px;
    }
  `;

  const skill_list = css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    gap: 10px;
  `;

  const box_skill = css`
    text-align: center;
    border: 1.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 5px;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 600;
    color: black;
    cursor: url("/images/new-tab.png") 10 10, pointer;
  `;

  const box_skill_loading = css`
    width: 181px;
    height: 34px;
    border-radius: 4px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  `;

  const poke_name = css`
    background: white;
    padding: 10px 40px;
    margin-top: 2rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-weight: 600;
    text-transform: capitalize;
  `;

  const intro_box = css`
    position: absolute;
    top: 2rem;
    z-index: 1;
  `;

  const poke_info_loading = css`
    width: 145px;
    height: 22px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  `;

  const poke_info = css`
    margin-left: 5px;
    font-weight: 600;
    color: white;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
    line-height: 140%;
  `;

  const ability_list = css`
    text-transform: capitalize;
  `;

  const ability_list_loading = css`
    width: 145px;
    height: 22px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  `;

  const loading_dummy = [
    <div key="1" className={box_skill_loading}></div>,
    <div key="2" className={box_skill_loading}></div>,
    <div key="3" className={box_skill_loading}></div>,
    <div key="4" className={box_skill_loading}></div>,
    <div key="5" className={box_skill_loading}></div>,
    <div key="6" className={box_skill_loading}></div>,
  ];

  const { code } = useParams();
  const [pokemon, setPokemon] = useState();
  const [pokemon_name, setPokemonName] = useState();
  const [showModal, setShowModal] = useState(false);
  const { dataPokemon, addPokemonData } = useContextData();
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(3000);

  const fetchData = () => {
    network.get(
      `pokemon/${code}/`,
      {},
      (res) => { 
        setPokemon(res);
      },
      (err) => {},
      () => {}
    );
  };

  const catchPokemon = () => {
    let chance = Math.random();
    let treshold = 0.5;

    if (chance >= treshold) { 
      toast.success(`${code} have been catch!`, {
        theme: "dark",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setShowModal(true);
    } else { 
      toast.error(`Whoops!, ${code} escape and runaway!`, {
        theme: "dark",
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleNicknamePokemon = (e) => {
    let val = e.target.value;

    if (val.length > 0) {
      setPokemonName(val);
    }
  };

  const handleAdd = () => {
    let new_pokemon = pokemon;
    new_pokemon.nick_name = pokemon_name;

    addPokemonData(new_pokemon);
    setShowModal(false);
  };

  const handleAddPokemon = () => {
    let checkName = dataPokemon.find((item) => item.nick_name === pokemon_name);

    if (checkName === undefined) {
      handleAdd();
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <BackButton />
      {!showModal || (
        <ModalComponent
          callbackClose={() => {
            setShowModal(false);
          }}
          callbackInput={handleNicknamePokemon}
          callbackSave={handleAddPokemon}
        />
      )}
      <div style={{ background: "#fefefb" }}>
        <ToastContainer />
        <div className={intro_box}>
          <div className={poke_name}>{code}</div>

          <div style={{ marginTop: "10px" }}>
            <div className={pokemon ? poke_info : poke_info_loading}>
              Weight : {pokemon ? pokemon.weight / 10 : "-"} kg
            </div>
            <div className={pokemon ? poke_info : poke_info_loading}>
              Height : {pokemon ? pokemon.height : 0}0 cm
            </div>
          </div>
        </div>
        <div className={bg_pokemon}>
          {pokemon ? (
            <div className={image_box}>
              <img
                className={image}
                src={
                  pokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt=""
              />
            </div>
          ) : (
            <div className={image_box}>
              <img src="" className={image_loading} alt="" />
            </div>
          )}

          <div className={image_box2}>
            <img
              onClick={catchPokemon}
              className={image}
              src="/images/pokeball.png"
              alt=""
            />
          </div>
        </div>

        <div className={image_box3} onClick={executeScroll}>
          <img className={image} src="/images/scroll.png" alt="" />
        </div>

        <div style={{ padding: "10px" }}>
          <h3 ref={myRef}>Abilities</h3>
          <div className={pokemon ? ability_list : ability_list_loading}>
            {pokemon
              ? pokemon.abilities.map(
                  (item, idx) => (idx === 0 ? "" : ", ") + item.ability.name
                )
              : "-"}
          </div>
        </div>

        <div style={{ padding: "10px" }}>
          <h3>Moves</h3>
          {pokemon ? (
            <div className={skill_list}>
              {pokemon.moves.map((item, idx) => (
                <a
                  className={box_skill}
                  href={`https://pokemondb.net/move/${item.move.name}`}
                  target="_blank"
                  rel="noreferrer"
                  key={idx}
                >
                  <div key={idx}>{item.move.name}</div>
                </a>
              ))}
            </div>
          ) : (
            <div className={skill_list}>{loading_dummy}</div>
          )}
        </div>
      </div>
    </>
  );
};
