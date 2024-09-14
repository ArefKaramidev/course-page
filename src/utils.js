export const isLogIn = () => {
  if (document.cookie === "username=admin") {
    return true;
  } else {
    return false;
  }
};
