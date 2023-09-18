const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config");

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    regno: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    village_id: DataTypes.INTEGER,
    studying_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '0:boarding,1:day',
    },
    religion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    card: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    transport_money: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    wallet_balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    wallet_pin: DataTypes.STRING(100),
    father: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ft_phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    mother: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    mt_phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    guardian: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    gd_phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    national_id: DataTypes.STRING(100),
    permission_id: DataTypes.STRING(100),
    province: DataTypes.STRING(100),
    district: DataTypes.STRING(100),
    sector: DataTypes.STRING(100),
    cell: DataTypes.STRING(100),
    village: DataTypes.STRING(100),
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updateVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Student",
    timestamps: false, // Since you have custom created_at and updated_at fields.
  }
);

module.exports = { Student };
