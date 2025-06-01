import { Component } from "react";
import Contact from "../Contact/Contact";

export default class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                deleteContact={this.props.deleteContact}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
