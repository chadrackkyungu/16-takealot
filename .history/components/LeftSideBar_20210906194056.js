import Logo from "../images/takealot-logo.png";
function LeftSideBar() {
  return (
    <div className={styles.leftSideBar}>
      <div className="logo">
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default LeftSideBar;
