module.exports = function (sequelize, DataTypes) {
    const StudentLogin = sequelize
      .define('student_login', {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true,
        },
        student_id: {
          type: DataTypes.INTEGER(),
          allowNull: false,
          unique: 'compositeIndex',
        },
        username: {
          type: DataTypes.STRING(),
          allowNull: false,
          unique: 'compositeIndex',
        },
        password: {
          type: DataTypes.STRING(),
          allowNull: false,
          unique: 'compositeIndex',
        },
      // implement [index6 specified in db design] compositeIndex when sequelize
      // supports it.
      // https://github.com/sequelize/sequelize/issues/8148
      });
  
      StudentLogin.associate = function (models) {
          models.student_login
          .belongsTo(models.student, {
            onDelete: 'CASCADE',
            
            foreignKey: {
              name: 'student_id',
            },
          });
      };
  
    return StudentLogin;
};
  