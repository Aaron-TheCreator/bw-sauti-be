const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets.js');

const router = require('express').Router();

const Users = require('../users/user-model.js');


router.post("/register", async (req, res, next) => {
    const credentials = req.body;

    try {
        const hash = bcryptjs.hashSync(credentials.password, 8);
        credentials.password = hash;

        const user = await Users.add(credentials);
        const token = generateToken(user);
    } catch (err) {
        console.log(err);
        next({
            code: 500,
            message: "error saving new user"
        });
    }
});


router.post("/login", async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const [user] = await Users.findBy({ username: username });

        if (user && bcryptjs.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
                message: "welcome to the Sauti Market",
                token: token
            });
        } else {
            next({ code: 401, message: "invalid credentials" })
        }
    } catch (err) {
        next({
            code: 500,
            message: "database error logging in",
            ...err
        })
    }
})

router.get('/', (req, res) => {
    res.status(200).json({
        message: "thats not how you login!"
    })
})

function generateToken(user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
        rolename: user.rolename
    };

    const options = {
        expiresIn: "1d"
    };

    const token = jwt.sign(payload, secrets.jwtSecret, options);

    return token;
}

module.exports = router;