const db = require("../db/dbConfig.js");

const getAllClients = async (style_id) => {
  try {
    const allClients = await db.any(
      "SELECT * FROM clients WHERE style_id=$1",
      style_id);
    return allClients;
  } catch (error) {
    return error;
  }
};

const getOneClient = async (id) => {
  try {
    const oneClient = await db.one("SELECT * FROM clients WHERE id=$1", id);
    return oneClient;
  } catch (error) {
    return error;
  }
};

const newClient = async (client) => {
  try {
    const newClient = await db.one(
      "INSERT INTO clients ( name, address, is_member, phone, rating, style_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        client.name,
        client.address,
        client.is_member,
        client.phone,
        client.rating,
        client.style_id,
      ]
    );
    return newClient;
  } catch (error) {
    return error;
  }
};

const deleteClient = async (id) => {
  try {
    const deletedClient = await db.one(
      "DELETE FROM clients WHERE id = $1 RETURNING *",
      id
    );
    return deletedClient;
  } catch (error) {
    return error;
  }
};

const updateClient = async (client) => {
  try {
    const updatedClient = await db.one(
      "UPDATE clients SET name=$1, address=$2, is_member=$3, phone=$4, rating=$5, style_id=$6 where id=$7 RETURNING *",
      [
        client.name,
        client.address,
        client.is_member,
        client.phone,
        client.rating,
        client.style_id,
        client.id,
      ]
    );
    return updatedClient;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllClients,
  getOneClient,
  newClient,
  deleteClient,
  updateClient,
};
