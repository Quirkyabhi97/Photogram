import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment 
        </button>

        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }

  //conditional rendering example
  renderTags() {
    if (this.state.tags.length === 0) return <h1>There are No Tags !</h1>;
    else
      return (
        <span>
          <h1>{this.state.tags.length} Tags Found !</h1>
          <ul>
            {this.state.tags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </span>
      );
  }

  //on click of button handled here
  handleIncrement() {
   

    console.log("No of times Increased = ");
    //return count;
    //return this.count;
  }

  //conditional className example
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
