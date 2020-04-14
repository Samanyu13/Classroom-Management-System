module.exports = function (sequelize, DataTypes) {
  const Subject = sequelize
    .define('subject', {
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
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
    });

  return Subject;
};
