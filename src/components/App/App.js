import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../Redux/contact-slice';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import style from '../App/App.module.css';

function App() {
  const isLoading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2 className={style.title}>Phone book</h2>
      <ContactForm />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      {isLoading && <h2 className={style.title}>Loading...</h2>}
      <ContactList />
    </Container>
  );
}

export default App;
