module.exports = `
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
        website: String!
    }

    type TODO {
        id: ID!
        title: String!
        completed: Boolean
        user: User
    }

    type Query {
        getTodos: [TODO]
        getAllUsers: [User]
        getUser(id: ID!): User 
    }
`