import Loader from "react-spinners/GridLoader";

function LoadingPage() {
  return (
    <div className="loading h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <Loader className="text-5xl z-20" size={60} color="#ffffff" />
    </div>
  );
}

export default LoadingPage;
