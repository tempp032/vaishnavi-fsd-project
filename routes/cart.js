const express = require("express");
const router = express.Router();

// POST /cart/total
router.post("/total", (req, res) => {
  const items = req.body.items;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Items array required" });
  }

  let total = 0;

  // Loop through items
  items.forEach(item => {
    total += item.price * item.qty;
  });

  return res.json({ total });
});

module.exports = router;
