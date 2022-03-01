import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { FloatBag } from "../components/float-bag";
import { PokemonCard } from "../components/home/pokemon-card";
import { network } from "../utils/network";
import { utils } from "../utils/utils";

export const Home = () => {
  const p_list_style = css`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [index, setIndex] = useState(20);
  const [stopLoad, setStopLoad] = useState(false);

  const initData = () => {
    network.get(
      "pokemon",
      {},
      (res) => {
        setData(res.results);
      },
      (err) => {},
      () => {}
    );
  };

  const loadMore = () => {
    setIndex(index + 20);

    network.get(
      "pokemon",
      { offset: index },
      (res) => {
        if (utils.checkEmptyValue(res.results)) {
          setStopLoad(true);
        } else {
          setIsFetching(false);
          setData([...data, ...res.results]);
        }
      },
      (err) => {},
      () => {}
    );
  };

  const isScrolling = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (isFetching) {
      loadMore();
    }
  });

  useEffect(() => {
    initData();

    if (!stopLoad) {
      window.addEventListener("scroll", isScrolling);
      return () => window.removeEventListener("scroll", isScrolling);
    }
  }, [stopLoad]);

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
        {!isFetching ? (
          <div style={{ marginTop: "1rem" }}>
            <b>Loading more data . . .</b>
          </div>
        ) : (
          <></>
        )}
      </div>
      <FloatBag />
    </>
  );
};
