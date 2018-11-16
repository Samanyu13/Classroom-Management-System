module.exports = function (sequelize, DataTypes) {
  const Library = sequelize
    .define('library', {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      book_no: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        unique: 'compositeIndex',
      },
      book_author: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: 'compositeIndex',
      },
      book_name: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: 'compositeIndex',
      },
      student_id: {
        type: DataTypes.INTEGER(),
        allowNull: true,
        unique: 'compositeIndex',
      },
      ret_date: {
        type: DataTypes.DATE(),
        allowNull: true,
        unique: 'compositeIndex',
      },
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
    });

  Library.associate = function (models) {
    models.library
      .belongsTo(models.student, {
        onDelete: 'CASCADE',
        foreignKey: {
          name: 'student_id',
          // allowNull: false -- already defined
        },
      });
  };

  return Library;
};