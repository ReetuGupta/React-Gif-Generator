import { useGif } from "../hooks/useGif";
import { Spinner } from "./Spinner";

// const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

export const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource =
  //     data.data?.images?.downsized_large?.url ||
  //     data.data?.images?.original?.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif, loading, fetchData} = useGif();

  return (
    <div className="bg-white shadow-lg p-6 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200">
      <h3 className="uppercase text-2xl font-semibold underline text-purple-700">A Random GIF</h3>

      {loading ? (<Spinner />) : (gif && <img src={gif} alt="Random gif" loading="lazy" className="rounded-lg shadow-md max-h-64 object-cover"/>)}

      <button onClick={fetchData} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-xl cursor-pointer active:scale-95 mt-5 uppercase font-medium shadow-md hover:opacity-90 transition">Generate</button>
    </div>
  );
};
