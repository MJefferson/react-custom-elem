import React from "react";
import ReactDOM from "react-dom";
// import reactToWebComponent from "react-to-webcomponent.js";

interface State {
  count: number;
}
interface Props {}

export default class ElementsMartial extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

    return (
      <div className="my-counter">
        The Count: 
        <style>{styles}</style>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

// customElements.define(
//   "elements-martial",
//   reactToWebComponent(ElementsMartial, React, ReactDOM)
// );
