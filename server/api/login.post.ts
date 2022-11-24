import credentials from '../../data/credentials.json'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	// return credentials

  let resp
  let user = {
    user: ''
  }

	if (body.password) {
		if (body.email && body.email !== '') {
			resp = credentials.find((cred) => {
				if (
					cred.email === body.email && cred.password === body.password
        ) {
          user.user = cred.email
          return cred
        }
			})
		} else {
			resp = credentials.find((cred) => {
				if (
					cred.number === body.number &&
					cred.password === body.password
        ) {
          user.user = cred.number
          return cred
        }
			})
		}
	}

  if (resp) {
    const token = jwt.sign(user.user, process.env.SECRET)
		return {
      message: 'success',
      token: token
		}
	}
	return {
		message: 'error',
	}
})
