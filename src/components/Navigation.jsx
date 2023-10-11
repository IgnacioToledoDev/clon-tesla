import Logo from "./Logo";

export const Navigation = () => {
  return (
    <header className="py-6 px-10 flex items-center fixed top-0 w-full justify-between text-white z-40">
      <Logo />2
      <nav>
        <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Carga</a>
          </li>
        </ul>
      </nav>
      <nav className="flex flex-grow basis-0 justify-end">
        <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <a href="#">Soporte</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Cuenta</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
