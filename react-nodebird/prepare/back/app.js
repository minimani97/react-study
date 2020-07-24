const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();

db.sequelize.sync()
    .then(() => {
        console.log('DB Connection Success!');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    origin: true,   // 보낸 곳의 주소가 자동으로 들어감
    credentials: true  // 브라우저와 서버의 도메인(포트번호)이 달라서, 요청할 때 쿠키가 전달되지 못하는 문제를 막기 위해 추가
}));
app.use(express.json());  // front에서 json 형식으로 데이터를 보냈을 때 이를 req.body 안에 넣어줌
app.use(express.urlencoded({ extended: true }));  // form submit 했을 때 url encoded 방식으로 데이터가 넘어오는데, 이 데이터를 req.body 안에 넣어줌

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello Express!')
});

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(3065, () => {
    console.log("Server is Running!");
});