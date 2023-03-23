# Farah-Dhia-Fadhila_Tugas1MCI

Penugasan 1 Camin MCI 2022

Nama	: Farah Dhia Fadhila
NRP	: 5025211030

## Tugas JavaScript
1. Buatkan program menggunakan Function Expression dengan JavaScript dengan tujuan menampilkan kalimat (“Saya Calon Admin MCI”) dengan delay 3000 ms lalu tampilkan nama anda.

```
var displayMessage = function () {
    console.log("Saya Calon Admin MCI");
    setTimeout(function () {
        console.log("Nama saya Farah Dhia Fadhila");
    }, 3000); //mengeset delay selama 3000 ms
}

displayMessage();
```

Outputnya akan menghasilkan seperti gambar di bawah dengan output kedua akan dicetak setelah delay 3000 ms dari output pertama.

![no.1](/Screenshots/Screenshots_JS/no.1.png)

2. Buatlah 2 file dengan tujuan sebagai berikut:
    * File pertama berisikan fungsi aritmatika sederhana seperti penjumlahan, pengurangan, perkalian, pembagian
    * File kedua tampilkan hasil perhitungan berikut menggunakan modul dari file pertama :  `4000 / 2 + 25 - 2 `
    
Pada file  `arithmetic.js `
```
function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// agar bisa diakses di file lain
module.exports = {
    addition,
    substraction,
    multiplication,
    division
};
```
Menggunakan function declaration dengan nama addition (pertambahan), substraction (pengurangan), multiplication (perkalian), dan division (pembagian). Selanjutnya file arithmetic.js akan dipanggil melalui `require('./arithmetic.js')` pada file mainArithmetic.js untuk menyelesaikan aritmatika.

Pada file  `mainArithmetic.js `
```
const aritmatika = require('./arithmetic.js');

var div = aritmatika.division(4000, 2);
var add = aritmatika.addition(div, 25);
var sub = aritmatika.substraction(add, 2);
var hasil = sub;

console.log("Hasil perhitungan: " + hasil);
```

Outputnya akan menghasilkan: 

![no.2](/Screenshots/Screenshots_JS/no.2.png)

3. np.argwhere merupakan sebuah fungsi yang tersedia pada library numpy di bahasa pemrograman python. Fungsi tersebut akan mengembalikan sebuah array 2 dimensi yang berisikan index - index value pada array n-d yang tidak bernilai 0, lakukan pencarian secara mandiri untuk mengetahui lebih lanjut mengenai fungsi np.argwhere. Implementasikan fungsi tersebut pada bahasa pemrograman Javascript untuk input array 3 dimensi.

```
function transformMatrix(input) {
    const output = [];
    let idxMatrix = 0;
    for (let i = 0; i < input.length; i++) {
        const matrix = input[i];
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                if (matrix[j][k] !== 0) {
                    output.push([idxMatrix, j, k]);
                }
            }
        }
        idxMatrix++;
    }
    return output;
}
```
Fungsi tersebut akan melakukan iterasi pada setiap index matriks. Setelah itu akan melanjutkan iterasi pada setiap baris dan kolom pada setiap index matriks.

```
function dim(arr) {
    if (arr instanceof Array) {
        return [arr.length].concat(dim(arr[0]));
    } else {
        return [];
    }
}
```
Fungsi tersebut akan mengeluarkan dimensi dari array matriks tersebut.

```
const input = [[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
],
[
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
],
[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
],
];

const output = transformMatrix(input);
console.log("Output: ");
console.log(output); 

const inputDimension = dim(input);
console.log("Matrix Dimension: ");
console.log(inputDimension); 
```

Outputnya akan menghasilkan: 

![no.3](/Screenshots/Screenshots_JS/no.3.png)

4. [OPTIONAL] Implementasi Asynchronous dengan membuat minimal 5 target hidup yang ingin kalian raih di tahun 2023, bisa menggunakan salah satu dari ketiga macam Asynchronous , (Menggunakan ketiganya akan lebih baik).

Menerapkan `promise` yang dikolaborasikan dengan `async/await`
```
const message = () => {
    console.log('Target hidup yang ingin saya capai pada tahun 2023 ini adalah...');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Jeng jeng jeng...');
        }, 1000);
    });
};
```

Fungsi di bawah akan menunggu sampai promise selesai.
```
async function messageWait() {
    let status = await message(); // tunggu sampai promise selesai
    console.log(status);
}
```

Menerapkan `callback` yang dikolaborasikan dengan `async/await`
```
const wish = (wish, callback) => {
    setTimeout(function () {
        console.log(`${wish}`);
    }, 2000);

    callback();
};
```

Variabel konstan wish yang akan dipanggil oleh callback
```
const wish1 = '1. Bisa jadi admin MCI';
const wish2 = '2. IP bisa di atas 3.7 (kalau bisa sih 4.0)';
const wish3 = '3. Bisa ikut dalam proyek dosen';
const wish4 = '4. Praktikum sisop kelar semua';
const wish5 = '5. Bisa lulus semua mata kuliah dengan nilai A';
```

Menerapkan `Nested Callback` yang akan dicetak setelah delay 3000 ms.
```
wish(wish1, function () {
    wish(wish2, function () {
        wish(wish3, function () {
            wish(wish4, function () {
                wish(wish5, function () {
                    setTimeout(function () {
                        console.log(`Aamiinn...`);
                    }, 3000);
                });
            });
        });
    });
});

messageWait();
```
Outputnya akan menghasilkan: 

![no.4](/Screenshots/Screenshots_JS/no.4.png)

## Tugas SQL
1. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

Program akan menyeleksi atribut NAMA dan UKT dengan UKT yang telah menggunakan `MAX(UKT)`
```
SELECT NAMA, UKT
FROM `data_mahasiswa.data_mahasiswa`
WHERE UKT = (
	SELECT MAX(UKT)
	FROM `data_mahasiswa.data_mahasiswa`
);
```

Outputnya akan menghasilkan: 

![no.1](/Screenshots/Screenshots_SQL/no.1.png)
2. Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.

Program akan menyeleksi atribut NAMA dan UKT dengan UKT yang telah menggunakan `MAX(UKT)` dan diurutkan `ORDER BY` berdasarkan atribut NAMA secara ascending.
```
SELECT NAMA, UKT
FROM `data_mahasiswa.data_mahasiswa`
WHERE UKT = (
	SELECT MAX(UKT)
	FROM `data_mahasiswa.data_mahasiswa`
)
ORDER BY NAMA;
```

Outputnya akan menghasilkan: 

![no.2](/Screenshots/Screenshots_SQL/no.2.png)
3. Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8

Program akan menghitung setiap record `COUNT(*)` yang memenuhi syarat atribut SEMESTER = 8 dan atribut IPK >= 3.5
```
SELECT COUNT(*) AS JUMLAH_MAHASISWA
FROM `data_mahasiswa.data_mahasiswa`
WHERE SEMESTER = 8 AND IPK >= 3.5;
```

Outputnya akan menghasilkan: 

![no.3](/Screenshots/Screenshots_SQL/no.3.png)

4. Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai denga 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

Program menggunakan CASE-END dan WHEN-THEN untuk menambahkan kondisi sesuai dengan soal.
```
SELECT NAMA, SEMESTER, UKT, 
CASE
  WHEN UKT <= 1000000 THEN 'A'
  WHEN UKT > 1000000 AND UKT <= 2000000 THEN 'B'
  ELSE 'C'
END AS GOLONGAN
FROM `data_mahasiswa.data_mahasiswa`;
```

Outputnya akan menghasilkan: 

![no.4](/Screenshots/Screenshots_SQL/no.4.png)
5. Tampilkan daftar nama, semester dan ipk berdasarkan ipk tertinggi tiap semester. Diurutkan berdasarkan semesternya. Jika ada yang nilainya sama, maka diurutkan berdasarkan alfabet.

Program menggunakan join pada table sendiri yang mana salah satu table telah diseleksi berdasarkan `MAX(IPK)` dan akan diurutkan `ORDER BY` berdasarkan SEMESTER dan NAMA secara ascending.
```
SELECT D2.NAMA, D1.SEMESTER, D2.IPK
FROM (
  SELECT SEMESTER, MAX(IPK) AS MAX_IPK
  FROM `data_mahasiswa.data_mahasiswa` 
  GROUP BY SEMESTER 
  ) D1
JOIN `data_mahasiswa.data_mahasiswa` D2
ON D1.SEMESTER = D2.SEMESTER 
WHERE D1.MAX_IPK = D2.IPK
ORDER BY D1.SEMESTER ASC, D2.NAMA ASC;
```

Outputnya akan menghasilkan: 

![no.5](/Screenshots/Screenshots_SQL/no.5.png)
