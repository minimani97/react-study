const express = require('express');

const { Post, Comment, Image, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// POST /post
router.post('/', isLoggedIn, async (req, res) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,  // 댓글 작성자
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User,  // 게시글 작성자
                attributes: ['id', 'nickname'],
            }, {
                model: User,  // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/', isLoggedIn, (req, res) => {
    res.json({ id: 1 });
});

// POST /post/{postId}/comment
router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시물입니다.');
        }

        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        });

        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        });

        console.log("fullComment.id: " + comment.id);
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// PATCH /post/{postId}/like
router.patch('/:postId/like', async (req, res, next) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('해당 게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.json({ postId: post.id, UserId: req.user.id });
    } catch(error) {
        console.error(error);
        next(error);
    }
});

// DELETE /post/{postId}/like
router.delete('/:postId/like', async (req, res, next) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('해당 게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.json({ postId: post.id, UserId: req.user.id });
    } catch(error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;