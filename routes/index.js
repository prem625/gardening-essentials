const router = require("express").Router();
const handleCreateNewPostOfCompany = require("../controllers/companies");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("about");
});

// Render the contact form on GET
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Handle form submission on POST
router.post("/contact", handleCreateNewPostOfCompany);

router.get("/cart", (req, res) => {
  res.render("cart");});


module.exports = router;