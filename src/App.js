import { useState, useEffect } from "react";
import ContactsEditor from "./components/ContactsEditor/ContactsEditor";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("contacts") !== null &&
      localStorage.getItem("contacts").length !== 0
    ) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    } else {
      localStorage.setItem("contacts", "[]");
    }
  }, []);

  const addContact = (id, name, number) => {
    const contactObj = { id: id, name: name, number: number };

    setContacts((prevState) => [...prevState, contactObj]);

    const prevStorage = JSON.parse(localStorage.getItem("contacts"));

    localStorage.setItem(
      "contacts",
      JSON.stringify([...prevStorage, contactObj])
    );
  };

  const deleteContact = (id) => {
    setContacts(
      JSON.parse(localStorage.getItem("contacts")).filter(
        (contact) => contact.id !== id
      )
    );

    const prevStorage = JSON.parse(localStorage.getItem("contacts"));

    localStorage.setItem(
      "contacts",
      JSON.stringify(prevStorage.filter((contact) => contact.id !== id))
    );
  };

  const isUnique = (number) => {
    if (
      JSON.parse(localStorage.getItem("contacts")).filter(
        (contact) => contact.number === number
      ).length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onInput = (value) => {
    if (value !== "") {
      setContacts(
        JSON.parse(localStorage.getItem("contacts")).filter((contact) =>
          contact.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactsEditor addContact={addContact} isUnique={isUnique} />
      <Filter onInput={onInput} />
      <ContactsList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
