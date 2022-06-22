const mongoose = require("mongoose");

const connectMDB = async () => {
  try {
    const uri = formatURI();
    console.info(uri);

    const conn = await mongoose.connect(uri);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const formatURI = () => {
  const db = process.env.MONGODB_NAME;
  const host = process.env.MONGODB_HOST;
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASS;
  const protocol = process.env.MONGODB_PROTOCOL;

  return `${protocol}://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`;
};

module.exports = connectMDB;
