import logoMandaCafe from "../../assets/logo.png";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#e3dacd]">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-2  sm:py-5 md:py-4  flex items-center justify-center ">
        <img
          src={logoMandaCafe}
          alt="Manda Café"
          className="h-30 w-30 sm:h-30 sm:w-30 md:h-30 md:w-30 lg:h-30 lg:w-30  object-contain"
        />
      </div>
    </header>
  );
}

export default Header;
