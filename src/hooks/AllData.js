const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dua_main.sqlite');
const query = 'SELECT * FROM dua';

db.all(query, (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }
  
  rows.forEach((row) => {
    console.log(row);
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
  });
});