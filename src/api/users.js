import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://c3interview.danshin.pro/graphql')

class UserApi {
  constructor(client) {
    this.client = client
    this.getList = this.getList.bind(this)
    this.getUser = this.getUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  getList() {
    return this.client.request(`
      query {
        Users {
          ID
          Login
          AvatarURL
        }
      }
    `)
  }

  getUser(id) {
    return this.client.request(`
      query {
        User(id:"${id}") {
          ID
          Login
          AvatarURL
        }
      }
    `)
  }

  deleteUser(id) {
    return this.client.request(`
      mutation DeleteUser {
        DeleteUser(id:"${id}") {
          ID
          Login
          AvatarURL
        }
      }
    `)
  }

  createUser(data) {
    if (!data) {
      return
    }
    return this.client.request(`
      mutation CreateUser {
        CreateUser(input:{Login: "${data.login}"}) {
          ID
          Login
          AvatarURL
        }
      }
    `)
  }
}

export default new UserApi(client)