const express = require("express");
const clients = express.Router({ mergeParams: true });

const { getOneStyle } = require("../queries/styles");

const {
  getAllClients,
  getOneClient,
  newClientObj,
  deleteClient,
  updateClient,
} = require("../queries/clients.js");

// index
clients.get("/", async (req, res) => {
  const { style_id } = req.params;
  const allClients = await getAllClients(style_id);
  const style = getOneStyle(style_id);
  if (style_id) {
    res.status(200).json({ ...style, allClients });
  } else {
    res
      .status(500)
      .json({ error: "Server Controller error: Couldn't get all" });
  }
});

// show
clients.get("/:id", async (req, res) => {
  const { style_id, id } = req.params;
  const client = await getOneClient(id);
  const style = await getOneStyle(style_id);
  if (client) {
    res.json({ ...style, client });
  } else {
    res.status(404).json("Client :id Not Found");
  }
});

// create
clients.post("/", async (req, res) => {
  const { style_id } = req.params;
  const client = await newClientObj({ style_id, ...req.body });
  res.status(201).json(client);
});

// update
clients.put("/:id", async (req, res) => {
  const {  id, style_id } = req.params;
  const updatedAClient = await updateClient({ style_id, id, ...req.body });
  if (updatedAClient.id) res.status(200).json(updatedAClient);
  else {
    res.status(404).json("Could not update. No Client found");
  }
});

// delete
clients.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedClient = await deleteClient(id);
  if (deletedClient.id) {
    res.status(200).json(deletedClient);
  } else {
    res.status(404).json("Could not delete; ClientId not found.");
  }
});

module.exports = clients;
