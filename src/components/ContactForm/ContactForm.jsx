import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'
import { Box, Btn, Label } from './ContactForm.styled';

export const ContactForm = ({addContact}) => {

  const onSubmit = (values, actions) => {
   
    const contact = { id: nanoid(), name: values.name.trim(), number: values.number.trim() }
    const isUnique = addContact(contact)
    if (isUnique) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
    >
      {({
        values,

        handleChange,
      }) => (
        <Form >
          <Box>
          <Label> Name </Label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChange}
            value={values.name}
          />
          
          
          <Label>Number  </Label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleChange}
            value={values.number}
          />
          
          

          <Btn type="submit">Add contact</Btn>
</Box>
        </Form>
      )}
    </Formik>
  );
};
