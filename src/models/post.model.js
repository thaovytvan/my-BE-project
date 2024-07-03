module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    author: {
      type: Sequelize.STRING,
    },
  });
  return Post;
};
