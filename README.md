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
```bash
GET https://cuci-sepatu-api-roan.vercel.app
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

### 2️⃣ POST tambah data
**Request**
```bash
POST https://cuci-sepatu-api-roan.vercel.app
**Body**
```json
{
  "nama": "Sepatu Nike",
  "merek": "Nike Air",
  "harga": 30000,
  "status": "Proses"
}
**Response**
```json
{
  "id": 2,
  "nama": "Sepatu Nike",
  "merek": "Nike Air",
  "harga": 30000,
  "status": "Proses"
}

### 3️⃣ PUT update data
**Request**
```bash
PUT https://cuci-sepatu-api-roan.vercel.app
**Body**
```json
{
  "status": "Selesai"
}

### 4️⃣ DELETE hapus data
**Request**
```bash
DELETE https://cuci-sepatu-api-roan.vercel.app
**Response**
```json
{ "message": "Item deleted" }

---

## 🚀 Cara Menjalankan Secara Lokal

### 1️⃣ Clone repo ini:
```bash
git clone https://github.com/username/cuci-sepatu-api.git
cd cuci-sepatu-api

### 2️⃣ Install dependencies:
```bash
npm install

### 3️⃣ Jalankan server:
```bash
npm start

### 4️⃣ DELETE hapus data
```bash
👉 http://localhost:3000/items

## 🌐 Link Deploy

### Vercel: https://cuci-sepatu-api-roan.vercel.app/

---

### 📦 **Langkah 5 – Upload yang diminta dosen**

Setelah semua selesai, tinggal upload dua hal:

| No | Output | Keterangan |
|----|----------|-------------|
| 1 | 🧱 **GitHub Repo Link** | Contoh: https://github.com/username/cuci-sepatu-api |
| 2 | 🌐 **Link Vercel Deploy** | Contoh: https://cuci-sepatu-api.vercel.app |

---
