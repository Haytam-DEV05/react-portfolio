import { NavLink } from "react-router";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="fade-in mb-7">
      <div className="container md:flex flex-row justify-between items-center">
        <div className="left">
          <h1 className="text-[55px] font-bold">
            Hi, I'm <span className="primary">Haitam Nefal</span>
          </h1>
          <h2 className="text-[28px] md:my-[2rem]">
            Full-Stack / Web Developer
          </h2>
          <p className="md:max-w-[500px]">
            I am a second-year Digital Development student at OFPPT, passionate
            about web development. I work with HTML, CSS, JavaScript, PHP,
            React, and Laravel to build modern, responsive, and user-friendly
            web applications. I continuously improve my skills through practical
            and real-world projects.
          </p>
          <div className="flex flex-col buttons my-3 md:flex-row gap-x-10 gap-y-3">
            <button className="bg-[var(--primary)] px-2 py-1 cursor-pointer rounded-2xl ">
              <a href="/src/assets/cv/bootstrap.jpg" download>
                Download Cv
              </a>
            </button>
            <NavLink
              className="bg-[var(--primary)] px-5 py-1.5 cursor-pointer rounded-2xl text-center"
              to="/Contact"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
        <div className="right">
          <img src="/images/imgPortfolio.jpg" alt="image-portfolio" />
        </div>
      </div>
    </section>
  );
}
