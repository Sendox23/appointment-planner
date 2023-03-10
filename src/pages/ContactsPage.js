import { useState } from "react";
import ContactForm from "../components/Contacts/ContactForm";
import TileList from "../components/Contacts/TileList";

const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingContact = contacts.find(contact => contact.name === name);
    if (!existingContact) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
    else {
    alert("The contact already exists.")
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};

export default ContactsPage;
