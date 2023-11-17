const express = require("express");
const styles = express.Router();

const clientsController = require("./clientsController");
styles.use("/:style_id/clients", clientsController);

const {
  getAllStyles,
  getOneStyle,
  createStyle,
  deleteStyle,
  updateStyle,
} = require("../queries/styles");

const {
  checkService,
  checkThis,
  checkDuration,
  checkBoolean,
} = require("../validations/checkStyles");

// index
styles.get("/", async (req, res) => {
  const allStyles = await getAllStyles();
  if (allStyles[0]) {
    res.status(200).json(allStyles);
  } else {
    res
      .status(500)
      .json({ error: "Server Controller error: Couldn't get all" });
  }
});

// show
styles.get("/:id", checkThis, async (req, res) => {
  const { id } = req.params;
  const style = await getOneStyle(id);
  if (style.id) {
    res.json(style);
  } else {
    res.status(404).json({ error: `style.id not found` });
  }
});

// create
styles.post(
  "/",
  checkService,
  checkDuration,
  checkBoolean,
  async (req, res) => {
    try {
      const style = await createStyle(req.body);
      res.json(style);
    } catch (err) {
      res.status(400).json({ error: "can't post", err });
    }
  }
);

// update
styles.put(
  "/:id",
  checkService,
  checkDuration,
  checkBoolean,
  async (req, res) => {
    const { id } = req.params;
    const updatedthisStyle = await updateStyle(id, req.body);
    res.status(200).json(updatedthisStyle);
  }
);

// delete
styles.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedStyle = await deleteStyle(id);
  if (deletedStyle.id) {
    res.status(200).json(deletedStyle);
  } else {
    res.status(500).json("Could not delete; StyleId not found.");
  }
});

module.exports = styles;
