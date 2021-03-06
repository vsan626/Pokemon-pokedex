const router = require("express").Router();
const controllers = require("./controllers");

router
  .get("/getAll", controllers.getAll)
  .post("/postNew", controllers.postOne)
router
  .get("/byType/:id", controllers.byType)
  .put("/update/:id", controllers.updateOne)
  .delete("/delete/:_id", controllers.deleteOne);

module.exports = router;
