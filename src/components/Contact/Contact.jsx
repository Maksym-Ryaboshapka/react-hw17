import { useState } from "react";

const Contact = ({ name, number, id: propsId, deleteContact }) => {
  const [id] = useState(propsId);

  return (
    <>
      <p style={{ display: "inline", margin: "0 15px 0 0" }}>
        {name} {number}
      </p>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
