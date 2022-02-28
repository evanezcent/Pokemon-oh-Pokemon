import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export const FloatBag = () => {
  const style = css`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    cursor: pointer;
    padding: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  `;

  const img = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: white;
  `;

  return (
    <Link to="my-pokemon" className={style}>
      <img className={img} src="images/pokemon-trainer.png" alt="evsct-empty" />
    </Link>
  );
};
