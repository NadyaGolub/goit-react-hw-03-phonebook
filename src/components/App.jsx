import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { getFilterAddArray } from './Utils/getFilterAddArray';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isUnique = this.state.contacts.find(item => item.name === contact.name);

    if (isUnique) {
      alert(`${contact.name} is alredy in contacts.`);
      return false
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
    return true
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));

  }

  setFilter = event => {
this.setState({filter: event.target.value})
  }



  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = getFilterAddArray(contacts, 'name', filter);
    return (
      <div>
        <Section title="Add contact">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Find contacts by name">
          <Filter value={filter} setValue={this.setFilter} />
        </Section>
        
        <Section title="Contact list">
          <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
