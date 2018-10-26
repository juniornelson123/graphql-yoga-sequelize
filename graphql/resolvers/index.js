import models from '../../models'
import user from './user'

export default {
  Query: {
    users: async () => await models.User.findAll()
  },

  Mutation: {
    ...user
  }
}