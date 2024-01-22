import Loader from "react-spinners/GridLoader";

function LoadingPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
      <Loader className="text-5xl" size={60} color="#ffffff" />
    </div>
  );
}

export default LoadingPage;
