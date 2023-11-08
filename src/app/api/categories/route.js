// route.js
// Import the necessary modules for SQLite
import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;

export async function GET(req, res) {
    if (!db) {
      db = await open({
        filename: "./dua_main.sqlite",
        driver: sqlite3.Database,
      });
    }
  
    const catgories = await db.all("SELECT * FROM category");
  
    return new Response(JSON.stringify(catgories), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  }