const express = require("express");
const clients = express.Router({ mergeParams: true });

const { getAllStyles } = require("../queries/styles");

const {
  getAllClients,
  getOneClient,
  newClient,
  deleteClient,
  updateClient,
} = require("../queries/clients");

// index
clients.get("/", async (req, res) => {
  const { style_id } = req.params;
  const allClients = await getAllClients(style_id);
  const style = getAllStyles(style_id);
  if (style.id) {
    res.status(200).json({ ...style, allClients });
  } else {
    res
      .status(500)
      .json({ error: "Server Controller error: Couldn't get all" });
  }
});

// show
clients.get("./:id", async (req, res) => {
  const { style_id, id } = req.params;
  const client = await getOneClient(id);
  const style = await getAllStyles(style_id);
  if (client) {
    res.json({ ...style, client });
  } else {
    removeEventListener.status(404).json;
  }
});

// create
clients.post("/", async (req, res) => {
  // try {
  //   const postClient = await newClient(req.body);
  //   res.json(postClient);
  // } catch (err) {
  //   res.status(400).json({ error: "can't post", err });
  // }
  const { style_id } = req.params;
  const client = await newClient({ style_id, ...req.body });
  res.status(200).json(client);
});

// update
clients.put("/:id", async (req, res) => {
  const { style_id, id } = res.params;
  const updatedClient = await updateClient({ style_id, id, ...req.body });
  if (updatedClient.id) res.status(200).json(updatedClient);
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
    res.status(500).json("Could not delete; ClientId not found.");
  }
});

module.exports = clients;
