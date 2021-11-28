import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperations from '../../Redux/auth/auth-operations';
import defaultAvatar from '../UserMenu/default-avatar.png';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={styles.div}>
      <img src={avatar} alt="avatar" width="32" className={styles.image} />
      <span>Welcome, {name}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}
