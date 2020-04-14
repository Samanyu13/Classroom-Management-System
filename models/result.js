module.exports = function (sequelize, DataTypes) {
  const Result = sequelize
    .define('result', {
      exam_id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        unique: 'compositeIndex',
      },
      marks: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      remarks: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: 'compositeIndex',
      },
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
    });

  Result.associate = function (models) {
    models.result
      .belongsTo(models.exams, {
        onDelete: 'CASCADE',

        foreignKey: {
          name: 'exam_id',
          // allowNull: false -- already defined
        },
      });
  };

  return Result;
};