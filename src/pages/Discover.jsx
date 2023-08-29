import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP',
  );

  if (isFetching) {
    return <Loader title="歌曲加载中..." />;
  }

  if (error) {
    return <Error />;
  }

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-white">
          浏览
          <span className="ml-2 text-2xl font-semibold">{genreTitle}</span>
        </h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="p-3 mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            i={index}
            data={data}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
