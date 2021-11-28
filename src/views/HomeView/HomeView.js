import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import defaultAvatar from '../HomeView/image.png';
import styles from '../../views/HomeView/HomeView.module.css';

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <div>
      {isLoggedIn ? (
        <div className={styles.container}>
          <p className={styles.text}>Hello, {userName}!</p>
          <p className={styles.text}>We are glad to see you!</p>
        </div>
      ) : (
        <div className={styles.container}>
          <img src={avatar} alt="avatar" width="52" />
          <div>
            <p className={styles.text}>Welcome to Phone book App!</p>
            <p>Register or login with the application without restrictions.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeView;
