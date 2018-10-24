module.exports = function (sequelize, DataTypes) {
    const Student = sequelize
      .define('student', {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: 'compositeIndex',
        },
        class: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          unique: 'compositeIndex',
        },
        parent_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: 'compositeIndex',
        },
        address: {
          type: DataTypes.STRING(60),
          allowNull: false,
          unique: 'compositeIndex',
        },
        contact: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          unique: 'compositeIndex',
        },
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
      });
  
    return Student;
};
  