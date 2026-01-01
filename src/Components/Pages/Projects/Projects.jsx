import { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const projects = [
    {
      id: 1,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/bootstrap.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/css.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/php.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/react.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 5,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/js.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 6,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/tailwind.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
    {
      id: 7,
      title: "Lorem, ipsum dolor.",
      img_path: "/images/laravel.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi eum exercitationem dolorem consequuntur possimus.`,
    },
  ];

  const [pagProjects, setPagProjects] = useState(projects.slice(0, itemsPerPage));

  // FUNCTION NAVIGATE TO NEXT PAGE =>
  const navigateToNextPage = (param) => {
    const start = (param - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPagProjects(projects.slice(start, end));
  };

  // MAKE THE BUTTONS =>
  const makeButtons = () => {
    const legthnBtn = Math.ceil(projects.length / itemsPerPage);
    const buttons = Array.from({ length: legthnBtn });
    const makeBtns = buttons.map((btn, index) => {
      return (
        <button
          key={index}
          className={
            currentPage === index + 1
              ? "bg-[var(--primary)] p-1 mx-2 cursor-pointer w-[30px] h-[30px] transition-all duration-300 text-[var(--text)] rounded-full"
              : "hover:bg-[var(--primary)] bg-[var(--soft)] p-1 mx-2 cursor-pointer w-[30px] h-[30px] rounded-full shadow-lg text-[var(--text)] rounded-[50%]"
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
                key={project.id}
                className={
                  project.id % 2 !== 0
                    ? "col bg-[var(--hover)] p-4 my-6 shadow-lg hover:shadow-none transition-shadow duration-400 slide-bottom"
                    : "col bg-[var(--hover)] p-4 my-6 shadow-lg hover:shadow-none transition-shadow duration-400 slide-top"
                }
              >
                <img
                  src={project.img_path}
                  alt="img"
                  className="w-full h-[100px] object-cover"
                />
                <h3 className="text-[25px] text-[var(--primary)] font-semibold py-2">
                  {project.title}
                </h3>
                <p className="text-[15px]">{project.description}</p>
                <div className="buttons mt-2">
                  <button className="mx-2 bg-[var(--primary)] px-5 py-1 cursor-pointer rounded-4xl">
                    github
                  </button>
                  <button className="mx-2 bg-[var(--primary)] px-5 py-1 cursor-pointer rounded-4xl">
                    live
                  </button>
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
