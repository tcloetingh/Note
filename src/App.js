import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {}
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote 
    });
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({ notes: res.data }) )
    .catch((err) => console.log(err.response.data));
  }

  getNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
    .then((res) => this.setState({ note: res.data, showNote: true }))
    .catch((err) => console.log(err.response.data));
  }

  submitNote = (data) => {
    axios.post(urlFor('notes'), data)
    .then((res) => this.setState({ showNote: false }))
    .catch((err) => console.log(err.response.data));

  }
  
  render() {
    const { showNote, notes, note } = this.state;

    return (
      <div className="App">
        <Nav toggle={this.toggleNote} show={showNote} />
        { showNote ? <Note note={note} submitNote={this.submitNote} /> : <List getNotes={this.getNotes} notes={notes} getNote={this.getNote} /> }
      </div>
    );
  }
}

export default App;
