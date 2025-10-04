import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 gap-10 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <h1 className="bg-white shadow-md py-4 rounded-3xl w-11/12 max-w-5xl tracking-wide font-bold text-3xl text-center italic text-purple-700">RANDOM GIFS GENERATOR</h1>

      <Random />

      <Tag />
    </div>
  );
}

export default App;
