const Tile = ({ name, phone, email, title, contact, date, time }) => {
  return (
    <div>
      {name && <p className="tile-title">Name: {name}</p>}
      {phone && <p className="tile">Phone: {phone}</p>}
      {email && <p className="tile">Email: {email}</p>}
      {title && <p className="tile">Title: {title}</p>}
      {contact && <p className="tile">Contact: {contact}</p>}
      {date && <p className="tile">Date: {date}</p>}
      {time && <p className="tile">Time: {time}</p>}
    </div>
  );
};
export default Tile;
