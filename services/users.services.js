class usersServices {
  constructor() {
    this.users = [];
    this.generator();
  }

  generator() {
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: `00${i}`,
        name: `user${i}`,
        age: parseInt(Math.random() * 50),
      });
    }
  }

  created(data) {
    this.users.push({
      id: `00${this.users.length}`,
      ...data,
    });
    return {
      msg: 'User created',
      userCreated: this.users[this.users.length - 1],
    };
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((i) => i.id === id);
  }

  update(id, data) {
    const index = this.users.findIndex((i) => i.id === id);
    if (index === -1) throw new Error('Not found ID of user');
    let user = this.users[index];
    this.users[index] = {
      ...user,
      ...data,
    };
    return {
      msg: 'User update',
      userUpdate: this.users[index],
    };
  }

  delete(id) {
    let index = this.users.findIndex((i) => i.id === id);
    if (index === -1) throw new Error('Not found Id of user');
    this.users.splice(index, 1);
    return {
      msg: 'User delete',
      userDelete: id,
    };
  }
}

module.exports = usersServices;
