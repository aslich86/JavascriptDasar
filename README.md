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
Untuk melengkapi pembelajaran dasar JavaScript, Anda dapat mempertimbangkan untuk menyertakan beberapa topik tambahan berikut:

## 9. Fungsi (Functions)
Fungsi digunakan untuk mengelompokkan kode yang dapat dipanggil dan digunakan kembali. Mereka membantu dalam mengorganisir kode dan menghindari pengulangan.

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

let message = greet("John");
console.log(message); // Output: "Hello, John!"
```

## 10. Object dan Properti
Objek adalah tipe data kompleks yang berisi kumpulan properti dan metode. Mereka digunakan untuk merepresentasikan entitas dalam aplikasi.

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, my name is " + this.name + ".";
    }
};

console.log(person.name); // Output: "John"
console.log(person.greet()); // Output: "Hello, my name is John."
```

## 11. Metode String dan Array
JavaScript memiliki banyak metode bawaan untuk memanipulasi string dan array dengan lebih mudah.

```javascript
let text = "Hello, world!";
console.log(text.length); // Output: 13
console.log(text.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(text.split(", ")); // Output: ["Hello", "world!"]

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5
console.log(numbers.reverse()); // Output: [5, 4, 3, 2, 1]
console.log(numbers.join("-")); // Output: "5-4-3-2-1"
```

## 12. Event Handling
JavaScript digunakan untuk menangani peristiwa (event) di halaman web, seperti klik tombol, pengisian formulir, dan lainnya.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Handling</title>
</head>
<body>
    <button id="btn">Klik Saya!</button>

    <script>
        const button = document.getElementById("btn");
        button.addEventListener("click", function() {
            alert("Tombol telah diklik!");
        });
    </script>
</body>
</html>
```

## 13. DOM Manipulasi
JavaScript memungkinkan Anda untuk memanipulasi struktur dan konten halaman web melalui DOM (Document Object Model).

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulasi</title>
</head>
<body>
    <div id="myDiv">
        <p>Hello, world!</p>
    </div>

    <script>
        const myDiv = document.getElementById("myDiv");
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Halo semuanya!";
        myDiv.appendChild(newParagraph);
    </script>
</body>
</html>
```

## 14. Pengenalan ke ES6 (ECMAScript 2015) Features
ES6 adalah versi terbaru dari standar JavaScript yang menyediakan banyak fitur baru yang meningkatkan kualitas kode dan produktivitas.

Contoh:
- Arrow function
- Let dan const
- Destructuring
- Spread Operator

## 15. Pengenalan ke Node.js dan NPM
Node.js adalah lingkungan JavaScript di sisi server yang memungkinkan Anda menjalankan kode JavaScript di luar browser. NPM (Node Package Manager) adalah alat untuk mengelola paket dan dependensi JavaScript.


Setelah Anda menguasai konsep dasar ini, Anda siap untuk mengeksplorasi lebih lanjut pemrograman JavaScript dan membangun aplikasi web yang lebih kompleks.

