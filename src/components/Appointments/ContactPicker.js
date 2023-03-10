const ContactPicker = ({ contacts, contact, setContact }) => {
  const mappedContacts = contacts.map((contact,index) => {
    return (
      <option key={index} value={contact.name}>
        {contact.name}
      </option>
    );
  });
  return (
    <select value={contact} onChange={(e) => setContact(e.target.value)}>
      <option key={0} value="">Select a Contact</option>
      {mappedContacts}
    </select>
  );
};

export default ContactPicker;
