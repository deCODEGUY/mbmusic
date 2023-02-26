import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-5 py-5 shadow-2xl bg-slate-800">
        <span className="font-semibold text-white uppercase tracking-[10px]">
          <Link to="/" className="text-white">
            <h1>MIKE BAKER Music</h1>
          </Link>
        </span>
        <ul className="inline-flex space-x-5 font-semibold tracking-[4px]">
          <li>
            <Link to="/" className="text-white">
              Music
            </Link>
          </li>
          <li>
            <Link to="/bio" className="text-white">
              Bio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="fixed text-center bottom-3 right-10 left-10">
        <div className="font-semibold text-xs uppercase tracking-[6px] text-slate-500">
          Copyright 2023 - Mike Baker
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
