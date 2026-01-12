import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router";

import "./Header.css";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";
import Theme from "../Theme/Theme";

import { HiMenu, HiX } from "react-icons/hi";

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
        { path: "Contact", element: <Contact /> },
        {
          path: "*",
          element: (
            <div className="min-h-[70vh] min-w-full flex items-center justify-center">
              <h2 className="text-[50px]">404 NOT FOUND</h2>
            </div>
          ),
        },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md border-b border-[var(--soft)] transition-colors duration-250 shadow-md">
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-[70px]">
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
                        ? "text-[var(--primary)] border-b-2 border-[var(--primary)] pb-1"
                        : "hover:text-[var(--primary)] transition"
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
              className={`md:hidden flex flex-col ps-4 gap-4 py-6 fixed top-[70px] left-0 right-0  bg-[var(--bg)]/80`}
              style={{ height: open ? "auto" : "0", opacity: open ? 1 : 0 }}
            >
              {navLinkes.map((link) => (
                <li key={link.id} onClick={() => setOpen(false)}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[var(--primary)] font-semibold border-b-2"
                        : "hover:text-[var(--primary)]"
                    }
                  >
                    {link.nameLinke}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main className="px-3 min-h-[90vh] pt-[100px] flex justify-center items-center flex-col">
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={Linkes}></RouterProvider>;
}
