import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
    <>
      <h2>Страница логина</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Почта
          <input
            type="text"
            name="name"
            value={email}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Пароль
          <input
            type="tel"
            name="number"
            value={password}
            onChange={handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </>
  );
}

export default LoginView;
