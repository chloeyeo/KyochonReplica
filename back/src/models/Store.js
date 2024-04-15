const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  storename: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: String,
    unique: true,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  createdAt: Date,
});

const Store = mongoose.model("store", StoreSchema);

module.exports = { Store };
