import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = '流行';

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-white">
          浏览
          <span className="ml-2 text-2xl font-semibold">{genreTitle}</span>
        </h2>
        <select
          onChange={() => {}}
          value=""
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
        {data?.tracks?.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            i={index}
            data={data?.tracks}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
