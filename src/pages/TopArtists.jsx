import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title="正在加载热门歌手" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-3xl font-bold text-left text-white">
        热门歌手
      </h2>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
