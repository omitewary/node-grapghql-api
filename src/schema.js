const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    id: ID!
    firstName: String
    lastName: String
    jobLevel: Int
    fullName: String
    company: Company
    technologies: [Technology]
  }

  type Technology {
    id: ID!
    name: String
    description: String
    employees: [Employee]
    companies: [Company]
  }

  type Company {
    id: ID!
    name: String
    description: String
    employees: [Employee]
    technologies: [Technology]
  }

  type Query {
    message: String
    randomNumber: Int
    calculator: String
    add(a: Float, b: Float): Float
    subtract(a: Float, b: Float): Float
    multiply(a: Float, b: Float): Float
    divide(a: Float, b: Float): Float
    employees: [Employee]
    technologies: [Technology]
    companies: [Company]
    employeeById(id: ID!): Employee
    companyById(id: ID!): Company
    technologyById(id: ID!): Technology
    empByCompByID(id: ID!): Company
  }

  type Mutation {
    updateMessage(newMessage: String!): String!
    addCompany(id: String!, name: String, description: String): Company!
  }
`;

module.exports = typeDefs;
