"use client";
import React, { useState, useEffect } from "react";

function MyComponent() {
  // Import the sqlite3 module
  const sqlite3 = require("sqlite3").verbose();

  // Open a connection to your SQLite database file
  const db = new sqlite3.Database("./dua_main.sqlite");

  // Define your SQL query
  const query = "SELECT * FROM dua";

  // Execute the query to retrieve data
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }

    // Process the retrieved data
    rows.forEach((row) => {
      console.log(row);
    });

    // Close the database connection
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
    });
  });
  return (
    <div>
      <h2>Data from SQLite Database:</h2>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.columnName}</li> // Replace "columnName" with the actual column name in your database
        ))} */}
      </ul>
    </div>
  );
}

export default MyComponent;
