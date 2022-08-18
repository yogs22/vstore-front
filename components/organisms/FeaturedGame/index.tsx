import { useEffect, useState, useCallback } from 'react';
import GameItem from '../../molecules/GameItem/index.tsx';
import { getFeaturedGame } from '../../../services/player.ts';
import { GameItemTypes } from '../../../services/data-types/index.ts';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_UPLOAD;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item._id}
              id={item._id}
              title={item.name}
              category={item.category.name}
              src={`${API_IMG}/${item.thumbnail}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
