import { Component } from "react";
import ContactsEditor from "./components/ContactsEditor/ContactsEditor";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount = () => {
    if (
      localStorage.getItem("contacts") !== null &&
      localStorage.getItem("contacts").length !== 0
    ) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")),
      });
    } else {
      localStorage.setItem("contacts", "[]");
    }
  };

  addContact = (id, name, number) => {
    const contactObj = { id: id, name: name, number: number };

    this.setState(
      (prevState) => ({
        contacts: [...prevState.contacts, contactObj],
      }),
      () => {
        const prevStorage = JSON.parse(localStorage.getItem("contacts"));

        localStorage.setItem(
          "contacts",
          JSON.stringify([...prevStorage, contactObj])
        );
      }
    );
  };

  deleteContact = (id) => {
    this.setState(
      {
        contacts: JSON.parse(localStorage.getItem("contacts")).filter(
          (contact) => contact.id !== id
        ),
      },
      () => {
        const prevStorage = JSON.parse(localStorage.getItem("contacts"));

        localStorage.setItem(
          "contacts",
          JSON.stringify(prevStorage.filter((contact) => contact.id !== id))
        );
      }
    );
  };

  isUnique = (number) => {
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

  onInput = (value) => {
    if (value !== "") {
      this.setState({
        contacts: JSON.parse(localStorage.getItem("contacts")).filter(
          (contact) => contact.name.toLowerCase().includes(value.toLowerCase())
        ),
      });
    } else {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
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
