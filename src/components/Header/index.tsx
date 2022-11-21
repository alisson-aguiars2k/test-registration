import "./styles.css";
import Logo from "../../assets/favicon-32x32.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="headerLeft">
          <Link to={"/"}>
            <img src={Logo} alt="/" />
          </Link>
        </div>
        <div className="headerRight">
          <Link to={"/car"} className="button">
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  );
};
