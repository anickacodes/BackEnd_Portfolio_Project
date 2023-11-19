const checkService = (req, res, next) => {
  if (typeof req.body.service === "string") return next();
  else {
    res.status(400).json({ error: "Service is required!" });
  }
};

// check id is numerical
function checkThis(req, res, next) {
  if (!isNaN(req.params.id)) next();
  else {
    res.json("ID must be a number value!");
  }
}

const checkDuration = (req, res, next) => {
  if (req.body.duration) return next();
  else {
    res.status(400).json({ error: "Doration must be valid 00:00:00 format!" });
  }
};

// Value can also come in as a string
const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == undefined ||
    typeof is_favorite == "boolean"
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

// Make sure that the URL starts with http:// or https://
  // const validateURL = (req, res, next) => {
  //   if (
  //     req.body.url.substring(0, 7) === "http://" ||
  //     req.body.url.substring(0, 8) === "https://"
  //   ) {
  //     return next();
  //   } else {
  //     res
  //       .status(400)
  //       .json({ error: `You forgot to start your url with http:// or https://` });
  //   }
  // };

module.exports = { checkService, checkThis, checkDuration, checkBoolean };
