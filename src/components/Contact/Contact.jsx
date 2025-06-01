import { Component } from "react";

export default class Contact extends Component {
  state = {
    id: this.props.id,
  };
  
  render() {
    return (
      <>
        <p style={{ display: "inline", margin: "0 15px 0 0" }}>
          {this.props.name} {this.props.number}
        </p>
        <button
          onClick={() => {
            this.props.deleteContact(this.state.id);
          }}
        >
          Delete
        </button>
      </>
    );
  }
}
