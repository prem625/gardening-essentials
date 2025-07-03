const model = require('../models/companies');

async function handleCreateNewPostOfCompany(req, res) {
  const body = req.body;
  if (!body.company || !body.email || !body.message) {
    return res.status(400).send('All fields are required');}

  await model.create({
    company: body.company,
    email: body.email,
    message: body.message
  });
  console.log('New post created for company:', body.company);
  res.redirect("/")
}

module.exports = handleCreateNewPostOfCompany;
