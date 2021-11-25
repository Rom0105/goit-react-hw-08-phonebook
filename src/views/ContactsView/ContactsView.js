import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../Redux/contact-selectors';
import { addContact } from '../../Redux/contact-slice';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import style from '../ContactsView/ContactsView.module.css';

function LoginView() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);

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
    <>
      <h2 className={style.title}>Phone book</h2>
      <form onSubmit={handleSubmit} className={style.label}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            className={style.input}
            onChange={handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={style.input}
            onChange={handleChangeName}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button type="submit" className={style.button}>
            Add contact
          </button>
        </div>
      </form>
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      {isLoading && <h2 className={style.title}>Loading...</h2>}
      <ContactList />
    </>
  );
}

export default LoginView;
