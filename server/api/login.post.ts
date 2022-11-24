import credentials from '../../data/credentials.json'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	// return credentials

	let resp
	let user = {
		user: '',
	}

	if (body.password) {
		if (body.email && body.email !== '') {
			resp = credentials.find((cred) => cred.email === body.email)
			if (!resp) {
				return {
					message: 'email',
				}
			}
			if (resp?.password !== body.password) {
				return {
					message: 'password',
				}
			}
			user.user = resp.email
		} else {
			resp = credentials.find((cred) => cred.number === body.number)
			if (!resp) {
				return {
					message: 'number',
				}
			}
			if (resp?.password !== body.password) {
				return {
					message: 'password',
				}
			}
			user.user = resp.number
	}

	if (resp) {
		const token = jwt.sign(user.user, process.env.SECRET)
		return {
			message: 'success',
			token: token,
		}
	}
	return {
		message: 'error',
	}
})
