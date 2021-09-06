import Logo from "../public/takealot-logo.png";
function Header() {
  return (
    <div>
      <div className="input__container">
        <input type="text" name="search" placeholder="Search..." />
      </div>

      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
