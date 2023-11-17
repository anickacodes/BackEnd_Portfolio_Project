// name TEXT NOT NULL,
// address TEXT,
// is_member BOOLEAN,
// phone varchar(10) not null,
// rating NUMERIC,

const checkThis = (req, res, next) => {
  if (!isNaN(req.params.id)) next();
  else {
    res.json("ID must be a number value!");
  }
};

const checkName = (req, res, next) => {
  if (typeof req.body.name === "string") return next();

  res.status(404).json({ error: 'Client Name must be type string || "' });
};

const checkPhone = (req, res, next) => {
  const { phone } = req.params;
  if (phone.length === 10 && parseInt(phone)) return next();

  res.status(404).json({ error: "Phone number must be 10 digits" });
};

const checkAddress = (req, res, next) => {
  if (!req.params.address) res.status(404).json({ error: "Address required!" });
  if (typeof req.body.address !== "string")
    res.status(404).json({ error: "Address must be a string value!" });
  next();
};

const checkIs_member = (req, res, next) => {
  const { is_member } = req.body;
  if (
    is_member == "true" ||
    is_member == "false" ||
    is_member == undefined ||
    typeof is_member == "boolean"
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_member must be a boolean value" });
  }
};

module.exports = {
  checkThis,
  checkIs_member,
  checkAddress,
  checkPhone,
  checkName,
};
