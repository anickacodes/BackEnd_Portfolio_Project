const express = require("express");
const styles = express.Router({mergeParams: true});

const clientsController = require('./clientsController')
styles.use('/:style_id/clients', clientsController)

const {
  getAllStyles,
  getOneStyle,
  newStyle,
  deleteStyle,
  updateStyle,
} = require("../queries/styles");

// index
styles.get("/", async (req, res) => {
  const allStyles = await getAllStyles();
  if (allStyles[0]) {
    res.status(200).json(allStyles);
  } else {
    res.status(500).json({ error: "Server Controller error: Couldn't get all" });
  }
});

// show
styles.get("./:id", async (req, res) => {
  const { id } = req.params;
  const style = await getOneStyle(id);
  if (style.id) {
    res.json(style);
  } else {
    res.status(404).json({error: `style.id not found- change to style`});
  }
});

// create
styles.post("/", async (req, res) => {
  try {
    const postStyle = await newStyle(req.body);
    res.json(postStyle);
  } catch (err) {
    res.status(400).json({ error: "can't post", err });
  }
});

// update
styles.put("/:id", async (req, res) => {
  const { id } = res.params;
  const updatedStyle = await updateStyle(id, req.body);
  res.status(200).json(updatedStyle);
});

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


module.exports = styles