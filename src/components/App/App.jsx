import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router';
import authOperations from '../../Redux/auth/auth-operations';
import authSelectors from '../../Redux/auth/auth-selectors';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import HomeView from '../../views/HomeView/HomeView';
import RegisterView from '../../views/RegisterView/RegisterView';
import LoginView from '../../views/LoginView/LoginView';
import ContactsView from '../../views/ContactsView/ContactsView';


function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(authSelectors.getIsFetchCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    
  }, [dispatch]);

  return (
     isFetchCurrentUser ? (
      <span className="visually-hidden">Loading...</span>
      
      ) : (
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<HomeView />} />
          </Route>
          <Route path="/register" element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegisterView />} />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/contacts" />}
          >
            <Route path="/login" element={<LoginView />} />
          </Route>
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" />}
          >
            <Route path="/contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </Container>
    )
);
}

export default App;
