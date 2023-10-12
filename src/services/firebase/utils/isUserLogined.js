const isUserLogined = (user) => {
  if (user) {
    console.log(user);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    return uid;
  } else {
    return null;
  }
};

export default isUserLogined;
