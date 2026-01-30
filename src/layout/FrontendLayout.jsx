import { Outlet, Link } from "react-router";

const FrontendLayout = () => {
  return (
    <>
      <header>
        <nav className="example-header text-center">假裝我是Header</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="example-footer text-center">假裝我是 Footer</footer>
    </>
  );
};

export default FrontendLayout;
