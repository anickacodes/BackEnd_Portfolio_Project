const db = require("../db/dbConfig");

const getAllStyles = async () => {
  try {
    const allStyles = await db.any("SELECT * FROM styles");
    return allStyles;
  } catch (err) {
    return err;
  }
};

const getOneStyle = async (id) => {
  try {
    const oneStyle = await db.one("SELECT * FROM styles WHERE id=$1", id);
    return oneStyle;
  } catch (err) {
    return err;
  }
};

const createStyle = async (style) => {
  try {
    const newStyle = await db.one(
      "INSERT INTO styles (category, service, duration, description, price, image_url) values($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        style.category,
        style.service,
        style.duration,
        style.description,
        style.price,
        style.image_url,
      ]
    );
    return newStyle;
  } catch (error) {
    return `error: cannot create`, error;
  }
};

const updateStyle = async (id, style) => {
  try {
    const updatedStyle = await db.one(
      "UPDATE Styles SET category=$1, service=$2, duration=$3, description=$4, price=$5, image_url=$6 where id=$7 RETURNING *",
      [
        style.category,
        style.service,
        style.duration,
        style.description,
        style.price,
        style.image_url,
        id,
      ]
    );
    return updatedStyle;
  } catch (error) {
    return error;
  }
};

const deleteStyle = async (id) => {
  try {
    const deletedStyle = await db.one(
      "delete from styles where id=$1 returning *",
      id
    );
    return deletedStyle;
  } catch (error) {
    return `cannot delete`, error;
  }
};

module.exports = {
  getAllStyles,
  getOneStyle,
  createStyle,
  deleteStyle,
  updateStyle,
};
