import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

export default function Footer() {
  const socialIcons = [
    {
      id: 1,
      icon: <FaGithub size={25} />,
      href: "https://github.com/HAYTAM-DEV05",
      aria_label: "Visit my GitHub profile",
    },
    {
      id: 2,
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/haitam-full-stack-developer-nefal-649698361/",
      aria_label: "Visit my LinkedIn profile",
    },
    {
      id: 3,
      icon: <SiFrontendmentor size={25} />,
      href: "https://www.frontendmentor.io/profile/Haytam-DEV05",
      aria_label: "Visit my Front-End profile",
    },
  ];

  return (
    <footer
      id="footer"
      className="container py-5 text-center md:flex justify-between items-center border-t-2 border-[var(--soft)]"
    >
      <p>
        All Right Reserverd By{" "}
        <span className="primary cursor-pointer">Haitam Nefal</span>
      </p>
      <ul className="flex gap-6 socials" >
        {socialIcons.map((ele) => (
          <li
            key={ele.id}
            className="cursor-pointer max-w-fit mx-auto my-2 hover:text-[var(--primary)] transition-colors duration-200"
          >
            <a href={ele.href} target="_blanc" aria-label={ele.aria_label}>
              {ele.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
