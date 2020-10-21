const MySql = require("../mysql");
var mysql = new MySql();
module.exports = {
  getTest(req, res) {
    mysql.query("select * from test", resp => {
      res.json(resp);
    });
  },
  updateTest(req, res) {
    res.json({
      message: "updating..",
      data: req.body
    });
  },
  createTest(req, res) {
    res.json({
      message: "creating..",
      data: req.body
    });
  },
  deleteTest(req, res) {
    res.json("delete test.");
  }
}