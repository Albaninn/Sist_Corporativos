// ./auth/authenticator.js
const jwt = require('jsonwebtoken');
const secretKey = 'SUA_CHAVE_SECRETA';

class Authenticator {
    createToken(payload) {
        return jwt.sign(payload, secretKey, { expiresIn: '5h' });
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, secretKey);
        } catch (error) {
            return null;
        }
    }
}

module.exports = new Authenticator();
