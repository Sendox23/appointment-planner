
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const activeClassHandler = ({ isActive }) => {
    return isActive ? classes.activeLink : classes.link;
  };
  return (
    <nav>
      <NavLink to="contacts" className={activeClassHandler}>
        Contacts
      </NavLink>
      <NavLink to="appointments" className={activeClassHandler}>
        Appointments
      </NavLink>
    </nav>
  );
};

export default Navigation;
