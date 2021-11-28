import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import styles from '../LoginView/LoginView.module.css';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            placeholder="email"
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={styles.input}
            placeholder="password"
          />
        </label>

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginView;
