import Transition from "./utils/Transition";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Transition
        show={true}
        appear={true}
        enter="transition duration-1000"
        enterStart="opacity-60 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition duration-1050"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <h1 className="text-4xl font-bold text-green-400">
          Comming Soon... 🚀
        </h1>
      </Transition>
    </div>
  );
}
