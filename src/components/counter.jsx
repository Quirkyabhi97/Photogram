import React, { Component } from "react";

class Counter extends Component {

  state = {
      count : 1,
      tags : ['tag1','tag2','tag3'] 
  };

  
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.IncrementCount}>Increment</button>
        <ul>
          {this.state.tags.map(item=>
            <li key={item}>{item}</li>
          )}
        </ul>
      </React.Fragment> 
    );
  }

  //conditional rendering example
  

 //on click of button handled here
  IncrementCount(){
    let {count}=this.state;
    
    console.log(this.count);
    return count;
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
