module.exports = function (sequelize, DataTypes) {
    const Exams = sequelize
      .define('exams', {
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
        date: {
          type: DataTypes.DATE(),
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
  
      Exams.associate = function (models) {
          models.exams
          .belongsTo(models.student, {
            onDelete: 'CASCADE',
            
            foreignKey: {
              name: 'student_id',
            // allowNull: false -- already defined
            },
          });
  
          models.exams
          .belongsTo(models.subject, {
            onDelete: 'CASCADE',
            
            foreignKey: {
              name: 'sub_id',
              // allowNull: false -- already defined
            },
          });
      };
  
    return Exams;
  };
  