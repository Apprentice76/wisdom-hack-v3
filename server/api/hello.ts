import credentials from '../../data/credentials.json'

export default defineEventHandler(event => {
  return credentials
})