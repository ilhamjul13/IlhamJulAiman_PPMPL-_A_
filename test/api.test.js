// test/api.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('API Testing', () => {
  let itemId; // Menyimpan ID item

  it('should return all items', (done) => {
    request(app)
      .get('/api/items')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.at.least(1);
        itemId = res.body[0].id; // Simpan ID item pertama
        done();
      });
  });

  it('should create a new item', (done) => {
    const newItem = { name: 'Item 3' };
    request(app)
      .post('/api/items')
      .send(newItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', 'Item 3');
        itemId = res.body.id; // Simpan ID item yang baru dibuat untuk pengujian berikutnya
        done();
      });
  });

  it('should delete an item by id', (done) => {
    request(app)
      .delete(`/api/items/${itemId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ message: 'Item deleted successfully' });
        done();
      });
  });

  it('should update an item by id', (done) => {
    // Pertama, kita harus membuat item lagi untuk mendapatkan ID yang valid
    const newItem = { name: 'Item 4' };
    request(app)
      .post('/api/items')
      .send(newItem)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        const newItemId = res.body.id;

        // Kemudian kita mencoba memperbarui item
        const updatedItem = { name: 'Updated Item' };
        request(app)
          .put(`/api/items/${newItemId}`)
          .send(updatedItem)
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('id', newItemId);
            expect(res.body).to.have.property('name', 'Updated Item');
            done();
          });
      });
  });
});
