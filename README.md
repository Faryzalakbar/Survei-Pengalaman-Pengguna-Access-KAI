# Aplikasi Survei Pengalaman Pengguna Access KAI

Aplikasi ini digunakan untuk mengumpulkan data survei pengalaman pengguna Access KAI dan menampilkannya di panel admin.

## Cara Penggunaan

### Persiapan

1. Pastikan Node.js sudah terinstal di komputer Anda
2. Buka terminal atau command prompt
3. Arahkan ke direktori aplikasi ini
4. Jalankan perintah berikut untuk menginstal dependensi:

```
npm install
```

### Menjalankan Aplikasi

1. Jalankan server dengan perintah:

```
npm start
```

2. Server akan berjalan di http://localhost:3000
3. Buka browser dan akses:
   - Halaman survei: http://localhost:3000/index.html
   - Panel admin: http://localhost:3000/admin.html

### Fitur

- **Halaman Survei**: Pengguna dapat mengisi survei pengalaman menggunakan Access KAI
- **Panel Admin**: Admin dapat melihat semua data survei yang telah dikumpulkan
- **Penyimpanan Data**: Data survei disimpan di server dalam file JSON dan dapat diakses dari perangkat manapun
- **Export Data**: Admin dapat mengekspor data survei ke format CSV

### Catatan

- Data survei disimpan di file `survey_data.json` di server
- Aplikasi juga menyimpan data di localStorage browser sebagai cadangan
- Jika server tidak dapat diakses, aplikasi akan menggunakan data dari localStorage