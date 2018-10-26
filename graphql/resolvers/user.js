import models from '../../models'

export default {
  createUser: async (parent, args) => {
    const user = await models.User.create(args.input)

    return user
  }
}