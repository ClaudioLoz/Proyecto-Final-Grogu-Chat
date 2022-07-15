const {
    login,
    register,
    getAllUsers,
    logOut,
  } = require("../controllers/userController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.get("/logout/:id", logOut);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  
  module.exports = router;