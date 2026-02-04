import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  const handleBtnNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-[70vh] min-w-full flex items-center justify-center flex-col">
      <h1 className="text-[70px] font-bold flex items-center">
        <span className="text-[80px]">O</span>ops
      </h1>
      <h2 className="text-[18px] font-black">404 - PAGE NOTE FOUND</h2>
      <p className="text-center my-4 max-w-[90%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[30%]">
        The page you are looking for might have been removed had its name
        changed or temporarily unavailable
      </p>
      <button
        className="bg-(--primary) py-2 px-10 cursor-pointer rounded-4xl font-semibold text-[18px]"
        onClick={handleBtnNavigate}
      >
        Go To Prev Page
      </button>
    </div>
  );
}
