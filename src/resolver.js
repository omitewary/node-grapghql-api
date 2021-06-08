const { addNewCompany } = require("./company.data");
const { employees, technologies, companies } = require("./data");

const resolvers = {
  //*Queries to fetch data
  Query: {
    message: () => msg,
    randomNumber: () => random(),
    employees: () => employees,
    technologies: () => technologies,
    companies: () => companies,
    employeeById: (parent, args, context, info) => getEmployeeById(args),
    companyById: (parent, args, context, info) => getCompanyById(args),
    calculator: () => calculator,
    add: (parent, args, context, info) => add(args),
    subtract: (parent, args, context, info) => subtract(args),
    multiply: (parent, args, context, info) => multiply(args),
    divide: (parent, args, context, info) => divide(args),
  },

  //* Mutation to modify data
  Mutation: {
    updateMessage: (parent, args, context, info) => {
      msg = args.newMessage;
      return `'message' field successfully updated with => ${msg}`;
    },
    addCompany: (parent, args, context, info) => addNewCompany(args),
  },

  //* User defined Types to get custom data
  Employee: {
    fullName: (parent, args, context, info) => getFullName(parent),
    company: (parent, args, context, info) => getCompanyByEmp(parent),
    technologies: (parent, args, context, info) => getTechByEmp(parent),
  },
  Company: {
    employees: (parent, args, context, info) => getEmpsByComp(parent),
    technologies: (parent, args, context, info) => getTechByComp(parent),
  },
  Technology: {
    employees: (parent, args, context, info) => getEmpsByTech(parent),
  },
};

let msg = "Hello World";
let calculator = "A simple calculator!";
let add = (args) => args.a + args.b;
let subtract = (args) => args.a - args.b;
let multiply = (args) => args.a * args.b;
let divide = (args) => args.a / args.b;
let random = () => Math.floor(Math.random() * 10) + 1;

let getFullName = (parent) => parent.firstName + " " + parent.lastName;

/**
 * 
 * @param {employees} args 
 * @returns an employee
 * @description get details of an employee by ID
 * @query
 * query{
    employeeById(id:"E1000"){
      fullName
      company{
        name      
      }
      technologies{
        name
      }
    }
  }
 */
let getEmployeeById = (args) => employees.find((_) => _.id === args.id);

/**
 *
 * @param {companies} args
 * @returns company
 * @description get details of a company
 * @query 
 * query{
    companyById(id:"C1003") {
      name
      employees{
        fullName
      }
      technologies{
        name
      }
    }
  }
 */
let getCompanyById = (args) => companies.find((_) => _.id === args.id);

/**
 *
 * @param {Employee} parent
 * @returns companies
 * @description get company for all employee
 * @query
 * query{
    employees{
      fullName
      company{
        name
      }
    }
  }
 */
let getCompanyByEmp = (parent) =>
  companies.find((_) => _.id === parent.companyId);

/**
 * 
 * @param {Employee} parent 
 * @returns technologies for each employee
 * @description get all technologies for all employees
 * @query
 * query{
    employees{
      fullName
      technologies{
        name
      }
    }
  }
 */
let getTechByEmp = (parent) =>
  technologies.filter((_) => parent.technologyIds.indexOf(_.id) != -1);

/**
 *
 * @param {Company} parent
 * @returns employees for each company
 * @description get all employees for all the companies
 * @query
 * query{
    companies{
      name
      employees{
        fullName
      }
    }
  }
 */
let getEmpsByComp = (parent) =>
  employees.filter((_) => _.companyId === parent.id);

/**
 *
 * @param {Company} parent
 * @returns technologies for each company
 * @description get all technologies for all companies
 * @query 
 * query {
    companies{
      name
      technologies{
        name
      }
    }
  }
 */
let getTechByComp = (parent) => {
  let empsByComp = employees.filter((_) => _.companyId === parent.id);
  let techs = [];
  empsByComp.forEach((emp) => {
    techs.push(emp.technologyIds);
  });
  let uniqueTechIds = [...new Set(techs.flat())]; //flatten array for technologyId and create unique set of array
  return technologies.filter((_) => uniqueTechIds.indexOf(_.id) != -1);
};

/**
 * 
 * @param {Technology} parent 
 * @returns employees
 * @description get all employees by all technologies
 * @query
 * {
    technologies {
      name
      employees {
        firstName
      }
    }
  }
 */
let getEmpsByTech = (parent) =>
  employees.filter((_) => _.technologyIds.indexOf(parent.id) !== -1);

module.exports = resolvers;
