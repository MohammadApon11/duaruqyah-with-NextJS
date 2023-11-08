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
  
    const subcatgories = await db.all("SELECT * FROM sub_category");
  
    return new Response(JSON.stringify(subcatgories), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  }