import { nanoid } from "nanoid";

const ContactsEditor = ({ addContact, isUnique }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const id = nanoid();
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (isUnique(number)) {
      addContact(id, name, number);
      form.reset();
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" style={{ display: "block" }}>
        Add
      </button>
    </form>
  );
};

export default ContactsEditor;

// export default class ContactsEditor extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     const id = nanoid();
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;

//     if (this.props.isUnique(number)) {
//       this.props.addContact(id, name, number);
//       form.reset();
//     } else {
//       alert(`${name} is already in contacts.`);
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <p>Name</p>
//         <input
//           type="text"
//           name="name"
//           // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <p>Number</p>
//         <input
//           type="tel"
//           name="number"
//           // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit" style={{ display: "block" }}>
//           Add
//         </button>
//       </form>
//     );
//   }
// }
