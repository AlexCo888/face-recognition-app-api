const handleProfile = (req, res, db) => {
  const { id } = req.params;
  let found = false;
  db.select("*")
    .from("users")
    .where("id", id)
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch((err) => res.status(404).json("error getting user"));
};

module.exports = {
  handleProfile: handleProfile,
};
