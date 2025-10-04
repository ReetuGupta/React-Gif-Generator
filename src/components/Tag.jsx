import { useGif } from "../hooks/useGif";
import { Spinner } from "./Spinner";
import { useState } from "react";

// const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

export const Tag = () => {
    const [tag, setTag] = useState('cute cats')
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&&tag=${tag}`;
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

  const {gif, loading, fetchData} = useGif(tag);
  return (
    <div className="bg-white shadow-lg p-6 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200">
      <h3 className="uppercase text-2xl underline font-semibold text-purple-700">A Random {tag} GIF</h3>

      {loading ? (<Spinner />) : (gif && <img src={gif} alt="Random gif" loading="lazy" className="rounded-lg shadow-md max-h-64 object-cover"/>)}

      <input className="w-10/12 bg-gray-100 border border-gray-300 rounded-xl py-2 px-3 text-center uppercase font-medium mt-2 focus:outline-none focus:ring-2 focus-within:ring-purple-400" value={tag}
      onChange={(event) => setTag(event.target.value)}/>

      <button onClick={() => fetchData(tag)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-xl cursor-pointer active:scale-95 uppercase font-medium shadow-md hover:opacity-90 transition">Generate</button>
    </div>
  );
};
