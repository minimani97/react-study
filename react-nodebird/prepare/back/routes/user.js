const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// POST /user/login
router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }

            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });

            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

// POST /user/logout
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

// POST /user
router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        // 공식문서 보고 해당 함수가 비동기인지 아닌지 확인하고 await 붙여주기~!~!
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(exUser) {
            return res.status(403).send('이미 가입되어 있는 이메일입니다.');  // send()는 무조건 한 번만!!
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({  // User.create는 비동기 함수라서 await(+async)를 붙여줘서 순서대로 실행되도록 함!
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch (error) {
        console.log(error);
        next(error);  // 에러가 발생하면 express가 알아서 브라우저로 에러가 났다고 알려주는데, 이를 위해 설정해둠
    }
});

// GET /user
router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            });

            res.status(200).json(fullUserWithoutPassword);
        } else{
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// PATCH /user/nickname
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.status(200).json({ nickname: req.body.nickname });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;