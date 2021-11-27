class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 20; i++) {
      this.products.push({
        id: `00${i}`,
        name: `product${i}`,
        count: parseInt(Math.random() * 100),
      });
    }
  }

  created() {}

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((i) => i.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductServices;
