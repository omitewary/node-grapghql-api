const { companies } = require("./data");

exports.addNewCompany = (newCompanyObj) => {
  isNewCompany(newCompanyObj);
  companies.push(newCompanyObj);
  console.log("Company added");
  return companies.find((_) => _.id === newCompanyObj.id);
};

function isNewCompany(obj) {
  //? throw error if company already exists
  if (companies.find((_) => _.id === obj.id || _.name === obj.name)) {
    throw new Error("Company already Exist!");
  }
}
