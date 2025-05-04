import { Link } from "react-router-dom";
import styles from "./NavMenu.module.css";
import { useState } from "react";

interface Props {}

const NavigateBar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className={styles.NavCountain}>
      <Link to={"/"} className={styles.NavLogo}>
        <img
          src={require("../../public/gym-logo.png")}
          alt=""
          className={styles.logo}
        />
        <p>GymAsist</p>
      </Link>
      <label className={styles.hamburgerMenu}>
        <input
          onChange={() => {
            setMenuOpen(!menuOpen);
          }}
          type="checkbox"
        />
      </label>

      <ul className={menuOpen ? styles.OpenMenu : ""}>
        {/* {userName ? (
      <li>
        <Link>{userName}</Link>
      </li>
    ) : (
      ""
    )} */}

        <li>{/* <Link>About</Link> */}</li>
        <li>
          <Link to={"/progress"}>My Progress</Link>
        </li>
        <li>{/* <Link>Settings</Link> */}</li>
        <li onClick={() => {}}>
          <Link to={"/"} className={styles.NavLogo}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigateBar;
