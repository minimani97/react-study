const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// db
const { User } = require('../models');

// POST /user
router.post('/', async (req, res, next) => {
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

module.exports = router;