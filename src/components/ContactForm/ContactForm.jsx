import { Formik, Form } from 'formik';
import { nanoid } from 'nanoid'

export const ContactForm = ({addContact}) => {

  const onSubmit = (values, actions) => {
   
    const contact = { id: nanoid(), ...values }
    addContact(contact)
    actions.resetForm()
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
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={handleChange}
            value={values.name}
          />
         
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleChange}
            value={values.number}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
