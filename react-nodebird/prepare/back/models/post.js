module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',  // 이모티콘 사용하기 위해선 utf8mb4
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });  // belongsToMany는 중간 테이블이 생김!  ->  ex) postId hashtagId를 컬럼으로 가지고 있는 테이블
        // 사용자-좋아요 다대다 관계
        db.Post.belongsToMany(db.User, { through: 'Like' /* 테이블 이름 별도로 설정가능 */ , as: 'Likers' });
        db.Post.belongsTo(db.Post, { as: 'Retweet' });  // 리트윗 (일대다 관계)
    };
    return Post;
}