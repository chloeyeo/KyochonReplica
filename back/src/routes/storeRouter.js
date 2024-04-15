const { Router } = require("express");
const storeRouter = Router();
const { Store } = require("../models/Store");

storeRouter.get("/", async (_, res) => {
  try {
    const stores = await Store.find({});
    return res.status(200).send({ stores });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

storeRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findById(id);
    return res.status(200).send({ store });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

storeRouter.post("/register", async (req, res) => {
  try {
    const {
      city,
      storename,
      address,
      phonenumber,
      location: latitude,
      location: longitude,
    } = req.body;
    if (!city) {
      return res.status(400).send({ error: "must provide city" });
    }
    if (!storename) {
      return res.status(400).send({ error: "must provide storename" });
    }
    if (!address) {
      return res.status(400).send({ error: "must provide address" });
    }
    if (!phonenumber) {
      return res.status(400).send({ error: "must provide phone number" });
    }
    if (!latitude) {
      return res.status(400).send({ error: "must provide latitude" });
    }
    if (!longitude) {
      return res.status(400).send({ error: "must provide longitude" });
    }
    const store = new Store({
      ...req.body,
      createdAt: new Date(),
    });
    await store.save();
    return res.status(200).send({ store });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

storeRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByIdAndDelete(id);
    return res.status(200).send({ store });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

storeRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.status(200).send({ store });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { storeRouter };
