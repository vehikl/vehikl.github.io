import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './vehikl_avatar.jpg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    };
  }

  componentDidMount() {
    ReactDom.findDOMNode(this.refs.searchQuery).focus(); 
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleEscape(event) {
    if (event.key === 'Escape') {
      ReactDom.findDOMNode(this.refs.searchQuery).value = "";
    }

    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    let url = 'https://github.com/vehikl/garage/search?utf8=%E2%9C%93&q=' + encodeURIComponent(this.state.searchQuery);
    let win = window.open(url, '_blank');
    win.focus(); 
  }

  render() {
    return (
      <div className="app">
        <div className="hero background">
          <div className="content">
            <img src={logo} className="App-logo" alt="logo" />

            <div className="search-block">
              <input type="text" ref="searchQuery" name="searchQuery" onChange={event => this.handleChange(event)} placeholder="Search..." onKeyDown={event => this.handleEscape(event)}/>
              <button>Search</button>
            </div>
            <div className="quick-links">
              <a href="https://drive.google.com/open?id=0B9x4chdYINSeZVFMbHdROTZWQWs" target="_blank">Files</a>
              <a href="https://github.com/vehikl/garage" target="_blank">Garage</a>
              <a href="#could_be_a_link" target="_blank">Onboarding</a>
              <a href="#could_be_a_link" target="_blank">Stuff</a>
            </div>
            <a className="source-link" href="https://github.com/vehikl/vehikl.github.io">source</a>
            <p className="copyright">&copy; Vehikl 2016</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
