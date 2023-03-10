import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/Layout/RootLayout";
import AppointmentsPage from "./pages/AppointmentsPage";
import ContactsPage from "./pages/ContactsPage";

const App = () => {
  const [contacts, setContacts] = useState([{name: "John Smith", phoneNumber:"9514403369", email: "test@test.com"}]);
  const [appointments, setAppointments] = useState([{title:"Test", contact:"Test", date:"", time: ""}]);

  const addContact = (name, phoneNumber, email) => {
    let newContact = { name, phoneNumber, email };
    setContacts((prev) => [...prev, newContact]);
  };

  const addAppointment = (title, contact, date, time) => {
    let newAppointment = { title, contact, date, time };
    setAppointments((prev) => [...prev, newAppointment]);
  };
console.log(contacts)
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          children: [
            {
              path: "contacts",
              element: (
                <ContactsPage contacts={contacts} addContact={addContact} />
              ),
            },
            {
              path: "appointments",
              element: (
                <AppointmentsPage
                  contacts={contacts}
                  appointments={appointments}
                  addAppointment={addAppointment}
                />
              ),
            },
          ],
        },
      ])}
    />
  );
};

export default App;
