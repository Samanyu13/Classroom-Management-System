module.exports = function (sequelize, DataTypes) {
    const AdminLogin = sequelize
      .define('admin_login', {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true,
        },
        vol_id: {
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
  
      AdminLogin.associate = function (models) {
          models.admin_login
          .belongsTo(models.volunteer, {
            onDelete: 'CASCADE',
            
            foreignKey: {
              name: 'vol_id',
            },
          });
      };
  
    return AdminLogin;
};
  