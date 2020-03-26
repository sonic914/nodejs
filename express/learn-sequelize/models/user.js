module.exports = (sequelize, DataTypes) => {
    return sequelize.define (
        'user', {
          name: {
              type: DataTypes.STRING(20),
              allowNull: false,
              unique: true,
          } ,
          age: {
              type: DataTypes.INTEGER.UNSIGNED,
              allowNull: false,
          },
          married: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
          },
          created_at: {
              type: DataTypes.DATE,
              allowNull: false,
              defaultValue: sequelize.literal('now()'),
          },
        }, {
            timestemps: false,
        }
    );
};