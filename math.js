function tambah(a, b) {
    // Pastikan kedua input adalah angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}

function kali(a, b) {
    // Pastikan kedua input adalah angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a * b;
}

function kurang(a, b) {
    return a - b;
}

function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
