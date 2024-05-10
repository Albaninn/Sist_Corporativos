// ./middlewares/authMiddleware.js
const authenticator = require('../auth/authenticator');

function authMiddleware(req, res, next) {
    // Extrai o token do cabeçalho Authorization
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) return res.status(403).json({ error: 'No token provided.' });

    const bearerToken = bearerHeader.split(' '); // Divide o cabeçalho em partes
    if (bearerToken.length !== 2 || bearerToken[0] !== 'Bearer') {
        return res.status(400).json({ error: 'Invalid token format.' });
    }

    const token = bearerToken[1]; // Obtém apenas o token
    const verified = authenticator.verifyToken(token);
    if (!verified) {
        return res.status(401).json({ error: 'Failed to authenticate token.' });
    }

    req.userId = verified.id; // Adiciona o id do usuário ao request para uso posterior
    next();
}
module.exports = authMiddleware;
