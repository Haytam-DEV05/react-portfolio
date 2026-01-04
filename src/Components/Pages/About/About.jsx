import React from "react";
import "./About.css";
import { useRef, useEffect } from "react";
export default function About() {
  const sliderRef = useRef(null);

  const images = [
    "/images/html.webp",
    "/images/css.webp",
    "/images/js.webp",
    "/images/bootstrap.webp",
    "/images/tailwind.webp",
    "/images/php.webp",
    "/images/mysql.webp",
    "/images/laravel.webp",
    "/images/react.webp",
    "/images/postman.webp",
    "/images/git.webp",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let speed = 0.7;

    const infiniteScroll = () => {
      if (!slider) return;

      slider.scrollLeft += speed;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      requestAnimationFrame(infiniteScroll);
    };

    infiniteScroll();
  }, []);

  return (
    <section id="about" className="container fade-in">
      <h1 className="text-[45px] font-semibold">
        About <span className="primary">Me</span>
      </h1>
      <div className="row md:flex justify-between gap-30">
        <div className="col">
          <p className="description max-w-[600px]">
            I focus on writing clean, structured, and maintainable code, and I
            strongly believe in learning through hands-on projects that reflect
            real professional scenarios. My goal is to grow as a professional
            web developer and contribute to impactful real-world projects.
          </p>
          <p className="description max-w-[600px] my-3">
            I am a second-year student in Digital Development at OFPPT, with a
            strong passion for web development and programming. I have solid
            knowledge of HTML, CSS, and JavaScript, and I also work with PHP and
            MySQL. Currently, I am expanding my skills in React and Laravel.
          </p>
          <div className="skills my-[2.5rem]">
            <h2 className="text-[35px] font-semibold">
              My <span className="primary">Skills</span>
            </h2>
            <div className="images-skills" ref={sliderRef}>
              {images.map((src, i) => (
                <img key={i} src={src} alt="skill" />
              ))}

              {/* duplicate */}
              {images.map((src, i) => (
                <img key={`dup-${i}`} src={src} alt="skill" />
              ))}
            </div>
          </div>
        </div>
        <div className="col mb-7 md:mb-0">
          <h2 className="text-[40px] font-semibold border-b-2 border-[var(--primary)] max-w-fit mb-[1.5rem]">
            Info <span className="primary">Personnel</span>
          </h2>
          <h3 className="text-[20px] font-semibold mb-3 border-b-2 border-[var(--primary)] pb-2">
            Full-Name : Haitam Nefal
          </h3>
          <h3 className="text-[20px] font-semibold mb-3 border-b-2 border-[var(--primary)] pb-2">
            Numero : 0623997124
          </h3>
          <h3 className="text-[20px] font-semibold mb-3 border-b-2 border-[var(--primary)] pb-2">
            Email : haitam.nefal@gmail.com
          </h3>
          <h3 className="text-[20px] font-semibold mb-3 border-b-2 border-[var(--primary)] pb-2">
            Niveau : Bac+2 / ISTA NTIC BENI-MELLA / DEVELOPPEMENT DIGITAL
          </h3>
        </div>
      </div>
    </section>
  );
}
