import React, { Component } from "react";

class App extends Component {
   state = { msg: false
   }
   fun=()=>{
     this.setState({msg:true});
   };
render() {
  
  return(
    <div>
    {this.state.msg && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    <button id="click" onClick={this.fun}>click</button>
     </div>
  );
}
}

export default App;