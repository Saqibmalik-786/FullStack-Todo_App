import db from "../config/db.js";
const User = {
  create: (userData, callback) => {
    const { id, name, email, password } = userData;
    const query = 'INSERT INTO users (id,name, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [id, name, email, password], callback);
  }
};
export default User;