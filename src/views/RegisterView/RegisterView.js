import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import styles from '../RegisterView/RegisterView.module.css';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration page</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={styles.input}
            placeholder="name"
          />
        </label>
        <label className={styles.label}>
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
            pattern="[0-9]{8,}"
            title="Password should be more than 8 characters"
          />
        </label>

        <button className={styles.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
