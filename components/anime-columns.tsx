import { useEffect, type FC } from "react";
import Balancer from "react-wrap-balancer";
import useAsyncState from "../utils/use-async-state";

import blankBg from '../public/img/blank_bg.png';


interface IAnime {
  title: string;
  name: string;
  cover?: string;
  homepage: string;
}

const AnimeColumnItem: FC<{ anime: IAnime }> = ({ anime }) => {
  return (
    <div className="flex flex-col items-center p-2 group">
      <a href={anime.homepage} target="_blank" rel="noreferrer" title={anime.title}>
        <img src={anime.cover ?? blankBg.src} alt={anime.title} className="w-[140px] text-[0] h-[198px] object-cover hover:transform hover:scale-105 transition-transform rounded-md" onDragStart={(e) => e.preventDefault()} />
      </a>
      {/* title */}
      <b className="block w-full mt-4 text-sm font-semibold cursor-default leading-5 text-center group-hover:text-[hsl(var(--nextra-primary-hue)var(--nextra-primary-saturation)45%/var(--tw-text-opacity))]">
        <Balancer ratio={0.8}>{anime.title}</Balancer>
      </b>
      {/* name */}
      <a href={anime.homepage} target="_blank" rel="noreferrer" className="mt-2 text-center text-xs">{anime.name}</a>
    </div>
  );
};


const AnimeColumns = ({ day = null, time = null }) => {
  const d = day ?? new Date().getDay();
  const tag = day === null ? '今日' : `周${'日一二三四五六'[d]}`;
  const timeStr = time ?? `${new Date().getFullYear()}Q${Math.floor(new Date().getMonth() / 3) + 1}`;

  const [list, setList, loading] = useAsyncState<IAnime[]>([]);

  useEffect(() => {
    import(`../public/anime/${timeStr}.json`).then((data) => {
      const all = data.default as { day: number; homepage: string; name: string; "zh-Hans": string; cover?: string }[];
      const match = all.filter((anime) => anime.day === d);
      setList(match.map((anime) => ({
        title: anime['zh-Hans'],
        name: anime.name,
        homepage: anime.homepage,
        cover: anime.cover,
      })));
    }).catch((e) => {
      console.error('error', e);
      setList([]);
    });
  }, [d, timeStr]);

  return (
    <div className="flex flex-col justify-between items-center mt-8 py-8 mb-16 space-y-8 bg-white/30 rounded-md">
      <h3 className="text-2xl font-bold">{tag}新番</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {loading && <div className="col-span-2 md:col-span-4 text-center">加载中...</div>}
        {!loading && <>
          <>{list.length === 0 && (
            <div className="col-span-2 md:col-span-4 text-center">没有数据</div>
          )}</>
          <>{
            list.map((anime) => (
              <AnimeColumnItem key={anime.name} anime={anime} />
            ))
          }</>
        </>}
      </div>
    </div>
  );
};


export default AnimeColumns;
