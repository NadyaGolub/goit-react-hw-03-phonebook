import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }));
  };

  render() {
    return (
      <div>
        <Section title="Add contact">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contact list">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}
