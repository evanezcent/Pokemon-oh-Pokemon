import { css } from "@emotion/css";

export const DetailPokemon = ({ data }) => {
  const image_box = css`
    width: 200px;
    height: 200px;
    margin: auto;
    cursor: pointer;
    padding-top: 20rem;
  `;

  const image_box2 = css`
    width: 80px;
    height: 80px;
    margin: auto;
    padding-top: 6rem;
    animation: scalling 1s ease-in-out infinite;
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
  `;

  const skill_list = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  `;

  const box_skill = css`
    text-align: center;
    border: 1.5px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    padding: 5px;
  `;

  const poke_name = css`
    background: white;
    padding: 10px 40px;
    margin-top: 2rem;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-weight: 600;
  `;

  const intro_box = css`
    position: absolute;
    top: 0;
  `;

  const poke_info = css`
    margin-left: 5px;
    font-weight: 600;
    color: white;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
    line-height: 140%;
  `;

  const dummy = [
    <div className={box_skill}>Skill 1</div>,
    <div className={box_skill}>Skill 1</div>,
    <div className={box_skill}>Skill 1</div>,
    <div className={box_skill}>Skill 1</div>,
    <div className={box_skill}>Skill 1</div>,
    <div className={box_skill}>Skill 1</div>,
  ];

  return (
    <>
      <div className={intro_box}>
        <div className={poke_name}>Pikachu</div>

        <div style={{ marginTop: "10px" }}>
          <div className={poke_info}>Weight : 10 kg</div>
          <div className={poke_info}>Height : 100 cm</div>
        </div>
      </div>
      <div className={bg_pokemon}>
        <div className={image_box}>
          <img
            className={image}
            src="https://static.wikia.nocookie.net/vsbattles/images/0/04/025Pikachu_XY_anime_4.png"
            alt=""
          />
        </div>

        <div className={image_box2}>
          <img className={image} src="/images/pokeball.png" alt="" />
        </div>
      </div>

      <div className={image_box3}>
        <img className={image} src="/images/scroll.png" alt="" />
      </div>

      <div style={{ padding: "10px" }}>
        <h3>Abilities</h3>
        <div>Abilities1, Abilities2</div>
      </div>

      <div style={{ padding: "10px" }}>
        <h3>Moves</h3>
        <div className={skill_list}>{dummy}</div>
      </div>
    </>
  );
};
