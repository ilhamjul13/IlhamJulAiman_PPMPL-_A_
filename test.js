const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
    // Test case untuk fungsi tambah
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
        expect(tambah(2, 2)).to.equal(4);
    });

    // Test case untuk fungsi kali
    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
        expect(kali(2, 3)).to.equal(6);
    });

    // Test case untuk fungsi kurang
    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
        expect(kurang(2, 2)).to.equal(0);
    });

    // Test case untuk fungsi bagi
    it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
        expect(bagi(6, 3)).to.equal(2);
    });

    // Test case untuk membagi dengan nol
    it('seharusnya mengembalikan error saat membagi dengan 0', function() {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    // Latihan 1: Kasus Negatif
    // Test case untuk menambahkan string
    it('seharusnya mengembalikan NaN saat menambahkan string', function() {
        expect(tambah('2', '2')).to.be.NaN;
    });

    // Test case untuk mengalikan dengan null
    it('seharusnya mengembalikan NaN saat mengalikan dengan null', function() {
        expect(kali(2, null)).to.be.NaN;
    });

    // Latihan 2: Kasus Negatif untuk fungsi tambah dan kali
    // Test case untuk menambahkan input null
    it('seharusnya mengembalikan NaN saat menambahkan input null', function() {
        expect(tambah(null, 5)).to.be.NaN;
    });

    // Test case untuk mengalikan input string
    it('seharusnya mengembalikan NaN saat mengalikan input string', function() {
        expect(kali('3', 5)).to.be.NaN;
    });
});
