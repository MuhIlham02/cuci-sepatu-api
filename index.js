import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Ganti dengan data Supabase kamu sendiri
const supabaseUrl = "https://qgbzvenlnldhapjcvzll.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnYnp2ZW5sbmxkaGFwamN2emxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyMTA0NjUsImV4cCI6MjA3Njc4NjQ2NX0.JV_t2f7aJ4teA6EyAFpHgozg074bk--O6EnJT5YIn2M";
const supabase = createClient(supabaseUrl, supabaseKey);

// ✅ Tambahkan route "/" biar gak error "Cannot GET /"
app.get("/", (req, res) => {
  res.send("🚀 API Laundry Shoes berjalan dengan baik!");
});

// ✅ GET semua data (bisa filter status)
app.get("/items", async (req, res) => {
  const { status } = req.query;
  let query = supabase.from("items").select("*");

  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// ✅ POST buat tambah data
app.post("/items", async (req, res) => {
  const { nama, merek, harga, status } = req.body;

  // 🧩 Pastikan semua kolom wajib diisi
  if (!nama || !merek || !harga) {
    return res
      .status(400)
      .json({ error: "Kolom nama, merek, dan harga wajib diisi!" });
  }

  const { data, error } = await supabase
    .from("items")
    .insert([{ nama, merek, harga, status: status || "Proses" }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

// ✅ PUT untuk update data
app.put("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { nama, merek, harga, status } = req.body;

  const { data, error } = await supabase
    .from("items")
    .update({ nama, merek, harga, status })
    .eq("id", id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

// ✅ DELETE hapus data
app.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Item berhasil dihapus ✅" });
});

// Jalankan server
const port = 3000;
app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
