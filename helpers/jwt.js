require('dotenv').config()
const {expressjwt} = require('express-jwt');
const userService = require('../users/user-service');

module.exports = jwt;

function jwt() {
	const secret = process.env.SECRET;
	return expressjwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
		path: ['/users/authenticate', '/users/register'],
	});
}

async function isRevoked(req, res) {
	const user = await userService.getById(res.payload.sub);

	if (!user) {
		throw new Error({name: 'UnauthorizedError'});
	}
}


