// Data untuk visualisasi grafik
// Data ini dapat diganti dengan data aktual dari API atau database

// Data contoh untuk Kabupaten Probolinggo
const pendidikanData = {
    kecamatan: [
        'Kecamatan A', 'Kecamatan B', 'Kecamatan C', 'Kecamatan D', 'Kecamatan E',
        'Kecamatan F', 'Kecamatan G', 'Kecamatan H', 'Kecamatan I', 'Kecamatan J'
    ],
    sekolah: [12, 19, 8, 15, 10, 7, 14, 11, 9, 13],
    guru: [150, 220, 120, 180, 160, 110, 200, 170, 140, 190],
    murid: [1200, 1800, 900, 1500, 1300, 800, 1700, 1400, 1100, 1600]
};

// Fungsi untuk menghitung rasio guru-murid
function hitungRasio() {
    const rasio = [];
    for (let i = 0; i < pendidikanData.guru.length; i++) {
        rasio.push((pendidikanData.murid[i] / pendidikanData.guru[i]).toFixed(1));
    }
    return rasio;
}

// Menambahkan data rasio ke objek pendidikanData
pendidikanData.rasio = hitungRasio();

// Fungsi untuk mendapatkan data aktual (jika tersedia)
function getActualData() {
    // Di sini Anda dapat menambahkan kode untuk mengambil data dari API atau sumber lainnya
    return pendidikanData;
}

// Ekspor data jika menggunakan modul
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pendidikanData, getActualData };
}