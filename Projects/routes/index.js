const router = require("express").Router();
// const exampleRoute = require('./exampleRoute');
// router.use('/exampleRoute', exampleRoute);

// FETCH REQUEST
const api = fetch('https://icanhazdadjoke.com', {
  method: 'get',
  headers: { "Accept" : "application/json" },
})  .then(res => res.json())
    .then(json => {
      console.log(json);
      return json;
});
    
router.get("/json", (req, res) => {
  res.status(200).json({ message: "Success" });
});

module.exports = router;
