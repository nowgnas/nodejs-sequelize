import { userModel } from "../db/models/user/user";

// service는 기본 mysql 쿼리를 사용한 것과 동일합니다.

class userService {
  static async findAllData() {
    const data = await userModel.findAllData();
    console.log(data);
    return data;
  }

  static async insertData() {
    const data = await userModel.createData();
    console.log(data);
    return data;
  }
}

export { userService };
