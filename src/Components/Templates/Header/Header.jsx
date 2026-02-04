import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router";

// PAGES =>
import "./Header.css";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import DetailleProject from "../../Pages/Projects/DetailleProject";
import Contact from "../../Pages/Contact/Contact";
import Theme from "../Theme/Theme";
import NotFound from "../../Pages/PageNotFound/NotFound";
// ==

import { HiMenu, HiX } from "react-icons/hi";
import { socialIcons } from "../Footer/Footer";

export default function Header() {
  const [rotatMenu, setRotateMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const navLinkes = [
    { id: 1, path: "/", nameLinke: "Home" },
    { id: 2, path: "/About", nameLinke: "About" },
    { id: 3, path: "/Projects", nameLinke: "Projects" },
    { id: 4, path: "/Contact", nameLinke: "Contact" },
  ];

  const Linkes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Projects", element: <Projects /> },
        { path: "Projects/:id", element: <DetailleProject /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md border-b border-(--soft) transition-colors duration-250 shadow-md">
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-17.5">
            <div className="logo">
              <h2 className="text-[30px] font-semibold cursor-pointer">
                <NavLink to="/">Haitam-NL</NavLink>
              </h2>
            </div>

            {/* DESKTOP UL */}
            <ul className="hidden md:flex items-center gap-7 font-medium text-lg">
              {navLinkes.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-(--primary) border-b-2 border-(--primary) pb-1"
                        : "hover:text-(--primary) transition"
                    }
                  >
                    {link.nameLinke}
                  </NavLink>
                </li>
              ))}
              <li>
                <Theme />
              </li>
            </ul>

            {/* MOBILE MENU */}
            <div className="md:hidden flex items-center gap-4">
              <Theme />
              <button
                className="rotate cursor-pointer"
                id="button-menu"
                onClick={() => {
                  setOpen(!open);
                  setRotateMenu(!rotatMenu);
                }}
                aria-label="button-menu"
              >
                {open ? <HiX size={30} /> : <HiMenu size={30} />}
              </button>
            </div>

            {/* MOBILE UL */}
            <ul
              className={`md:hidden fixed top-0 -right-25 min-h-screen bg-(--bg) py-10 px-6 transition-all duration-1000 shadow-2xl ${
                open ? "showMenu" : "closeMenu"
              }`}
            >
              <li
                className="mb-6 cursor-pointer rotate max-w-fit"
                onClick={() => {
                  setOpen(false);
                  setRotateMenu(!rotatMenu);
                }}
              >
                <HiX size={25} />
              </li>

              {navLinkes.map((link) => (
                <li key={link.id} className="mb-4">
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-(--primary) font-semibold border-b-2 border-(--primary) text-[20px]"
                        : "hover:text-(--primary) text-[20px]"
                    }
                  >
                    {link.nameLinke}
                  </NavLink>
                </li>
              ))}
              <div className=""></div>
              <div className="bottom-nav-menu w-full pt-5">
                <div className="social-icons absolute bottom-5 flex justify-around w-[90%]">
                  {socialIcons.map((social) => {
                    return (
                      <a
                        href={social.href}
                        key={social.id}
                        aria-label={social.aria_label}
                        className="cursor-pointer hover:text-(--primary) hover:-translate-y-2 transition-all duration-200"
                        target="_blank"
                      >
                        {social.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <main className="px-3 relative min-h-[90vh] pt-25 flex justify-center items-center flex-col overflow-hidden">
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={Linkes}></RouterProvider>;
}
