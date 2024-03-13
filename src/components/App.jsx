import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactData = localStorage.getItem('Contacts');
    const parsedContacts = JSON.parse(contactData) ?? [];
    this.setState({
      contacts: parsedContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('Contacts', stringifiedContacts);
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.name);
  };

  handleBtnSubmit = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const findContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (findContact) {
      alert(`${name} is already in contact.`);
      return;
    }

    const id = nanoid();
    const newContact = { id, ...data };
    const updatedContacts = [...contacts, newContact];
    this.setState({
      contacts: updatedContacts,
    });
  };

  filterContacts = () => {
    const getFiltered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return this.state.filter === '' ? this.state.contacts : getFiltered;
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleBtnSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <Contacts
          data={this.filterContacts()}
          onDeleteBtn={this.deleteContact}
        />
      </div>
    );
  }
}
