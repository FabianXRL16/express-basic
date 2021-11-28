const boom = require('@hapi/boom');

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
      ...newProduct,
    };
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find((i) => i.id === id);
    if (!product) throw boom.notFound('Product not found aaa');
    return product;
  }

  async update(id, data) {
    const index = this.products.findIndex((i) => i.id === id);
    if (index === -1) throw boom.notFound('Not found ID of product');
    let updateProduct = this.products[index];
    this.products[index] = {
      ...updateProduct,
      ...data,
    };
    return {
      msg: 'Product update',
      productUpdate: this.products[index],
    };
  }

  async delete(id) {
    const index = this.products.findIndex((i) => i.id === id);
    if (index === -1) throw boom.notFound('Not found ID of product');
    this.products.splice(index, 1);
    return {
      msg: 'Product delete',
      id: id,
    };
  }
}

module.exports = ProductServices;
