const message = () => {
    console.log('Target hidup yang ingin saya capai pada tahun 2023 ini adalah...');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Jeng jeng jeng...');
        }, 1000);
    });
};

async function messageWait() {
    let status = await message(); // tunggu sampai promise selesai
    console.log(status);
}


const wish = (wish, callback) => {
    setTimeout(function () {
        console.log(`${wish}`);
    }, 2000);

    callback();
};

const wish1 = '1. Bisa jadi admin MCI';
const wish2 = '2. IP bisa di atas 3.7 (kalau bisa sih 4.0)';
const wish3 = '3. Bisa ikut dalam proyek dosen';
const wish4 = '4. Praktikum sisop kelar semua';
const wish5 = '5. Bisa lulus semua mata kuliah dengan nilai A';

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

// source: https://devsaurus.com/javascript-asynchronous#async-await