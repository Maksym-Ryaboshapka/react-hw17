import { Component } from "react";
import ContactsEditor from "./components/ContactsEditor/ContactsEditor";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

let initalContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default class App extends Component {
  state = {
    contacts: [...initalContacts],
    filter: "",
  };

  addContact = (id, name, number) => {
    const contactObj = { id: id, name: name, number: number };

    this.setState(
      (prevState) => ({
        contacts: [...prevState.contacts, contactObj],
      }),
      () => (initalContacts = [...this.state.contacts])
    );
  };

  deleteContact = (id) => {
    this.setState(
      (prevState) => ({
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      }),
      () => (initalContacts = { ...this.state.contacts })
    );
  };

  isUnique = (number) => {
    if (
      initalContacts.filter((contact) => contact.number === number).length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  onInput = (value) => {
    if (value !== "") {
      this.setState((prevState) => ({
        contacts: prevState.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(value.toLowerCase())
        ),
      }));
    } else {
      this.setState({ contacts: initalContacts });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactsEditor addContact={this.addContact} isUnique={this.isUnique} />
        <Filter onInput={this.onInput} />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
