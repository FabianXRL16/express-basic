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

  created(data) {
    let newProduct = {
      id: `00${this.products.length}`,
      ...data,
    };
    this.products.push(newProduct);
    return {
      msg: 'Product created',
      ...newProduct
    };
  }

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
