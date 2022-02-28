import { css } from "@emotion/css";
import { Link } from "react-router-dom";

export const BackButton = () => {
  const style = css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    position: fixed;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    padding: 10px;
    overflow: hidden;
    font-weight: bold;
    color: white;
    text-decoration: none;
    z-index: 1;
  `;

  const img = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: white;
  `;

  return (
    <Link to="/" className={style}>
      <img className={img} src="/images/left-arrow.svg" alt="evsct-empty" />
    </Link>
  );
};
