const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchCurrentUser,
};

export default authSelectors;
