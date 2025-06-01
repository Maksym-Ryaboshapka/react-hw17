import { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <>
        <p>Filter</p>
        <input
          type="text"
          onInput={(e) => this.props.onInput(e.currentTarget.value)}
        />
      </>
    );
  }
}
