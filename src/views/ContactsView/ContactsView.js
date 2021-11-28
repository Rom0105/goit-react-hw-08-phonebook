import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../Redux/contact-slice';
import { getContacts } from '../../Redux/contact-selectors';
import { addContact } from '../../Redux/contact-slice';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import styles from '../ContactsView/ContactsView.module.css';

function LoginView() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChangeName = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (name === '' && number === '') {
      return alert(`${name} is already in contacts`);
    }
    contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === number,
    )
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phone book</h2>
      <form onSubmit={handleSubmit} className={styles.label}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={styles.input}
            onChange={handleChangeName}
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={styles.input}
            onChange={handleChangeName}
            placeholder="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      {isLoading && <h2 className={styles.title}>Loading...</h2>}
      <ContactList />
    </div>
  );
}

export default LoginView;
