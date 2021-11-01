import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Handlebars from "handlebars";
import Books from './components/Books'

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const text = response.text()

    console.log(text);
    // let template = Handlebars.compile(text);
    // this.setState = template



    if (response.status !== 200) {
      //throw Error(body.message)
    }
    return response;
  };

  data = {
    name: "Alan"
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
        </header>
        <p>{this.state.data}</p>
        <Books />
        {/* <div dangerouslySetInnerHTML={{ __html: this.(data) }} /> */}

        {/* <Link to="/books" className="btn btn-primary">Get books</Link> */}


      </div>
    );
  }
}

export default App;