import { useState } from "react";
import "./Projects.css";
import { useNavigate } from "react-router";
import { DataProjects } from "../../../Data/DataProjects";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const [pagProjects, setPagProjects] = useState(
    DataProjects.slice(0, itemsPerPage),
  );

  // FUNCTION NAVIGATE TO NEXT PAGE =>
  const navigateToNextPage = (param) => {
    const start = (param - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPagProjects(DataProjects.slice(start, end));
  };

  // MAKE THE BUTTONS =>
  const makeButtons = () => {
    const legthnBtn = Math.ceil(DataProjects.length / itemsPerPage);
    const buttons = Array.from({ length: legthnBtn });
    const makeBtns = buttons.map((btn, index) => {
      return (
        <button
          key={index}
          className={
            currentPage === index + 1
              ? "bg-(--primary) p-1 mx-2 cursor-pointer w-7.5 h-7.5 transition-all duration-300 text-white rounded-full"
              : "hover:bg-(--primary) bg-(--soft) p-1 mx-2 cursor-pointer w-7.5 h-7.5 rounded-full shadow-lg text-(--text)"
          }
          onClick={() => {
            navigateToNextPage(index + 1);
            setCurrentPage(index + 1);
          }}
        >
          {index + 1}
        </button>
      );
    });
    return makeBtns;
  };

  // NAVIGATE TO THE DETAILLE PROJECT =>
  const navigate = useNavigate();
  const handleBtnDetaille = (param) => {
    navigate(`/Projects/${param}`);
  };

  return (
    <section id="projects" className="">
      <div className="container">
        <h1 className=" text-[40px] font-semibold">
          My <span className="primary">Projects</span>
        </h1>
        <div className="row md:grid grid-cols-2 gap-10">
          {pagProjects.map((project) => {
            return (
              <div
                onClick={() => handleBtnDetaille(project.id)}
                key={project.id}
                className={
                  project.id % 2 !== 0
                    ? "col bg-(--hover) p-4 my-6 shadow-lg hover:shadow-none transition-shadow duration-400 slide-bottom cursor-pointer"
                    : "col bg-(--hover) p-4 my-6 shadow-lg hover:shadow-none transition-shadow duration-400 slide-top cursor-pointer"
                }
              >
                <img
                  src={project.img_path}
                  alt="img"
                  className="w-full h-25 object-cover"
                />
                <h3 className="text-[25px] text-(--primary) font-semibold py-2">
                  {project.title}
                </h3>
                <p className="text-[15px] line-clamp-3">
                  {project.description}
                </p>
                <div className="buttons mt-2 text-white">
                  <button
                    className="mx-2 bg-(--primary) px-5 py-1 rounded-4xl "
                    aria-label="show project in github"
                    onClickCapture={(e) => e.stopPropagation()}
                  >
                    <a
                      href={project.github_path}
                      target="_blank"
                      className="cursor-grab"
                    >
                      github
                    </a>
                  </button>
                  {project.live_path && (
                    <button
                      className={`mx-2 bg-(--primary) px-5 py-1 rounded-4xl`}
                      aria-label="show project in live"
                      onClickCapture={(e) => e.stopPropagation()}
                    >
                      <a
                        href={project.live_path ? project.live_path : ""}
                        target="_blank"
                        className="cursor-grab"
                      >
                        live
                      </a>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="btns my-5">{makeButtons()}</div>
      </div>
    </section>
  );
}
