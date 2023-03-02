import { ButtonDel, Item } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
                <p>{contact.name}: </p>
                <p>{contact.number} </p>
                <ButtonDel onClick={() => deleteContact(contact.id)}>Delete</ButtonDel>
          </Item>
        );
      })}
    </ul>
  );
};
