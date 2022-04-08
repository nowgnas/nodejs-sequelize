"use strict";

// sequelize로 user 테이블을 생성해 줍니다
// sequelize model:generate --name User --attributes <attr>:<type>,<attr>:<type>
//  위 명령어를 사용해서 테이블을 생성합니다
// 테이블 생성 후 데이터베이스에 적용시키기 위한 마이그레이션이 필요합니다

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      _id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
