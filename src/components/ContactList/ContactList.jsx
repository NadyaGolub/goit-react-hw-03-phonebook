export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
                <p>Name: {contact.name}</p>
                <p>Number: {contact.number}</p>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
