export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
                <p>Name: {contact.name}</p>
                <p>Number: {contact.number}</p>
                <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
