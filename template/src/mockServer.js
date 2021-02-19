import { createServer, Model, Serializer } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    serializers: {
      application: Serializer.extend({
        embed: true,
        root: false,
      }),
    },
    models: {
      user: Model,
    },
    seeds(server) {
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
    },
    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      })
    },
  })
  return server
}
