exports.getLogin = (req, res) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
  });
};

exports.postLogin = (req, res) => {
  req.isLoggedIn = true;
  res.redirect("/");
};
