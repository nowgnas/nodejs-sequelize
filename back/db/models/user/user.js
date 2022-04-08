import models from "../index";

// mongodb와 유사하게 데이터베이스에 원하는 요청을 할 수 있습니다.

class userModel {
  static async findAllData() {
    const data = await models.User.findAll();
    return data;
  }

  static async createData() {
    const insert = await models.User.create({
      _id: "234",
      name: "park",
      email: "mail",
    }).then(() => console.log("data created"));

    return insert;
  }
}

export { userModel };
