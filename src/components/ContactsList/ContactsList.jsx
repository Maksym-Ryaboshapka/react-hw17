import Contact from "../Contact/Contact";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
