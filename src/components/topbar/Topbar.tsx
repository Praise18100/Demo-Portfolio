import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

type TopbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Topbar({ menuOpen, setMenuOpen }: TopbarProps) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+234 803 878 4620</span>
            <Mail className="icon" />
            <span>akenroyepraise@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
