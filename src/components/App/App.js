import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Switch from 'react-switch';
import { fetchContacts } from '../../Redux/contact-slice';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import RegisterView from '../../views/RegisterView/RegisterView';
import ContactsView from '../../views/ContactsView/ContactsView';
import LoginView from '../../views/LoginView/LoginView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}

export default App;
