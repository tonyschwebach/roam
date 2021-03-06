// Dependencies
const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");
const jwt = require("express-jwt");
// const csrf = require("csurf");
// const csrfProtection = csrf({
//   cookie: true
// });

//middleware
// router.use(csrfProtection);
router.use(
  jwt({
    secret: process.env.SECRET,
    getToken: (req) => req.cookies.token,
    algorithms: ['HS256']
  })
);

// Route for /api/expenses
router.route("/")
.get(expenseController.findAll)
.post(expenseController.create);

// Route for /api/expenses/:id
router.route("/:id")
.get(expenseController.findById)
.put(expenseController.update)
.delete(expenseController.remove);

// Routes for /api/expenses/user/:id
// router.route("/user/:id")
//   .get(expenseController.findByUserId)
//   .put(expenseController.edit)
//   .delete(expenseController.delete);

// // Routes for /api/expenses/trip/:id
// router.route("/trip/:id").get(expenseController.findByTripId);

// Exports
module.exports = router;
