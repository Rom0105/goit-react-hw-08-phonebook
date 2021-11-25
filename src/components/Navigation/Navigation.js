import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/contacts" exact>
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
