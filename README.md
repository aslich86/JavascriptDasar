# Tutorial Dasar Pemrograman JavaScript

## 1. Apa itu JavaScript?
JavaScript adalah bahasa pemrograman tingkat tinggi yang sering digunakan untuk mengembangkan aplikasi web interaktif. Dengan JavaScript, Anda dapat mengontrol perilaku dan tampilan dari halaman web, berinteraksi dengan pengguna, memanipulasi data, dan masih banyak lagi.

## 2. Bagaimana Penggunaan JavaScript?
JavaScript dapat digunakan secara internal dalam kode HTML atau eksternal sebagai file terpisah dengan ekstensi `.js`. Untuk menggunakan JavaScript dalam kode HTML, Anda dapat menempatkannya di dalam tag `<script>` di bagian head atau body halaman web Anda. Berikut adalah contoh penggunaannya:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Penggunaan JavaScript</title>
    <script>
        // Kode JavaScript Anda akan ditempatkan di sini
    </script>
</head>
<body>
    <!-- Konten HTML Anda akan ditempatkan di sini -->
</body>
</html>
```

## 3. Alert, Prompt, Log, dan Comment
- `alert`: Digunakan untuk menampilkan kotak dialog dengan pesan kepada pengguna.
- `prompt`: Menghasilkan kotak dialog yang memungkinkan pengguna memasukkan nilai.
- `console.log`: Digunakan untuk mencatat informasi ke konsol (developer tools) selama proses debugging.
- `//`: Tanda double-slash digunakan untuk membuat komentar satu baris.
- `/* */`: Tanda ini digunakan untuk membuat komentar multi-baris.

Contoh penggunaannya:

```javascript
// Alert
alert("Halo, ini contoh alert!");

// Prompt
let name = prompt("Masukkan nama Anda:");
console.log("Nama Anda adalah " + name);

// Log
console.log("Pesan ini akan muncul di konsol");

/* 
    Ini adalah contoh komentar
    multi-baris
*/
```

## 4. Variable (Declare & Assign)
Variabel digunakan untuk menyimpan data. Di JavaScript, Anda dapat mendeklarasikan variabel menggunakan kata kunci `var`, `let`, atau `const`. Perbedaan utamanya adalah dalam lingkup (scope) dan mutabilitas.

```javascript
// Declare & Assign
let age = 25;
const pi = 3.14;
var name = "John";
```

## 5. Tipe Data dan Operator
JavaScript memiliki beberapa tipe data seperti number, string, boolean, object, dan lainnya. Operator digunakan untuk melakukan operasi matematika atau manipulasi pada variabel.

```javascript
// Tipe Data
let num = 10; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let person = { name: "John", age: 30 }; // Object

// Operator
let a = 5;
let b = 3;

let sum = a + b; // Penjumlahan
let difference = a - b; // Pengurangan
let product = a * b; // Perkalian
let quotient = a / b; // Pembagian
let remainder = a % b; // Modulo (Sisa bagi)
```

## 6. Array
Array digunakan untuk menyimpan beberapa nilai dalam satu variabel. Di JavaScript, array bisa berisi tipe data apa pun.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: "apple"

fruits.push("grape"); // Menambahkan nilai baru ke akhir array
fruits.pop(); // Menghapus nilai terakhir dari array
```

## 7. Looping
Looping digunakan untuk mengulangi blok kode secara berulang hingga kondisi tertentu terpenuhi.

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
}

// While Loop
let count = 0;
while (count < 5) {
    console.log("Perulangan ke-" + count);
    count++;
}
```

## 8. Conditional Statement
Pernyataan kondisional digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.

```javascript
let age = 18;

if (age >= 18) {
    console.log("Anda sudah dewasa");
} else {
    console.log("Anda masih anak-anak");
}
```

Setelah Anda menguasai konsep dasar ini, Anda siap untuk mengeksplorasi lebih lanjut pemrograman JavaScript dan membangun aplikasi web yang lebih kompleks.

---

Catatan: Tulisan di atas adalah contoh tutorial dasar pemrograman JavaScript. Anda dapat menyimpannya dalam file dengan ekstensi `.md` untuk membuat panduan yang mudah diakses dan dibagikan. Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya!
