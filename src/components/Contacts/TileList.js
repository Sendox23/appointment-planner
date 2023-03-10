import { Fragment } from "react";
import Tile from "./Tile";

const TileList = ({ contacts, appointments }) => {
  const contactsMapped =
    contacts &&
    contacts.map((contact) => {
      return (
        <li key={contact.name}>
          <Tile
            name={contact.name}
            phone={contact.phoneNumber}
            email={contact.email}
          />
        </li>
      );
    });
  const appointmentsMapped =
    appointments &&
    appointments.map((appointment) => {
      return (
        <li key={appointment.title}>
          <Tile
            title={appointment.title}
            contact={appointment.contact}
            date={appointment.date}
            time={appointment.time}
          />
        </li>
      );
    });
  return (
    <Fragment>
      <ul>{appointmentsMapped}</ul>
      <ul>{contactsMapped}</ul>
    </Fragment>
  );
};

export default TileList;
