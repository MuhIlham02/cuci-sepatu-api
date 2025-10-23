# 🧼 REST API Daftar Barang Cuci Sepatu

## 📌 Deskripsi Umum
Proyek ini adalah REST API sederhana untuk mengelola daftar sepatu yang sedang dicuci. API ini dibangun menggunakan **Node.js + Express.js** dan menyimpan data di **Supabase** sebagai database. Proyek ini juga mendukung filter status, misalnya:  
`GET /items?status=Selesai`

---

## 🎯 Tujuan dan Fitur Utama
- CRUD (Create, Read, Update, Delete) data sepatu.
- Filter data berdasarkan status cuci (Proses / Selesai).
- Terhubung dengan database Supabase.
- Dapat diakses publik melalui Vercel.

---

## 🧱 Struktur Data (Tabel `items`)
| Kolom | Tipe Data | Keterangan |
|--------|------------|-------------|
| id | integer | Primary Key (auto increment) |
| nama | text | Nama sepatu |
| merek | text | Merek sepatu |
| harga | numeric | Biaya cuci |
| status | text | Status cuci (Proses / Selesai) |

---

## ⚙️ Contoh Request & Response

### 1️⃣ GET semua item
**Request**

**Response**
```json
[
  {
    "id": 1,
    "nama": "Sepatu Converse",
    "merek": "Converse",
    "harga": 25000,
    "status": "Proses"
  }
]

