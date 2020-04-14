module.exports = function (sequelize, DataTypes) {
  const ClassesHandled = sequelize
    .define('classes_handled', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      sub_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      vol_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      student_id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
    });

  ClassesHandled.associate = function (models) {
    models.classes_handled
      .belongsTo(models.student, {
        onDelete: 'CASCADE',

        foreignKey: {
          name: 'student_id',
          // allowNull: false -- already defined
        },
      });

    models.classes_handled
      .belongsTo(models.subject, {
        onDelete: 'CASCADE',

        foreignKey: {
          name: 'sub_id',
          // allowNull: false -- already defined
        },
      });

    models.classes_handled
      .belongsTo(models.volunteer, {
        onDelete: 'CASCADE',

        foreignKey: {
          name: 'vol_id',
          // allowNull: false -- already defined
        },
      });
  };

  return ClassesHandled;
};