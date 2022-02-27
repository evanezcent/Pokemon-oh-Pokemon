import { css } from "@emotion/css";

export const FloatBag = () => {
  const style = css`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #2d6ab3;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
    padding: 10px;
    overflow: hidden;
  `;

  const img = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: white;
  `;

  return (
    <div className={style}>
      <img className={img} src="images/pokemon-trainer.png" alt="evsct-empty" />
    </div>
  );
};
