import { Fragment } from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Phone (area code first){" "}
          <input
            type="phone"
            pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
