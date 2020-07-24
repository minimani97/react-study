exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();  // 인자로 아무것도 없으면 다음 미들웨어 실행, 인자가 있으면 에러 처리 미들웨어로 감
    } else {
        res.status(401).send('로그인하세요!');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('로그인 하지 않은 사용자만 접근 가능합니다.');
    }
};