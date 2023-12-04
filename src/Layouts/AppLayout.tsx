import { Link } from "react-router-dom";
import "./App.css";
import { PropsWithChildren } from "react";
function App({ children }: PropsWithChildren) {
  return (
    <>
      <nav className="flex gap-2 p-5 text-white bg-slate-600">
        <Link className="hover:underline hover:animate-pulse " to={"/"}>
          Home
        </Link>
        <Link className="hover:underline hover:animate-pulse " to={"/contacts"}>
          Contacts
        </Link>
        <Link className="hover:underline hover:animate-pulse " to={"/about"}>
          About
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
}

export default App;
