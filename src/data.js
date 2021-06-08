exports.employees = [
  {
    id: "E1000",
    firstName: "James",
    lastName: "Ulrich",
    jobLevel: 4,
    companyId: "C1000",
    technologyIds: ["T1001", "T1002"],
  },
  {
    id: "E1001",
    firstName: "Robert",
    lastName: "Hetfield",
    jobLevel: 3,
    companyId: "C1001",
    technologyIds: ["T1002", "T1003"],
  },
  {
    id: "E1002",
    firstName: "Lars",
    lastName: "Hammett",
    jobLevel: 4,
    companyId: "C1000",
    technologyIds: ["T1000", "T1003", "T1004"],
  },
  {
    id: "E1003",
    firstName: "Kirk",
    lastName: "Trujillo",
    jobLevel: 4,
    companyId: "C1001",
    technologyIds: ["T1001", "T1003", "T1004"],
  },
  {
    id: "E1004",
    firstName: "Kerry",
    lastName: "Lombardo",
    jobLevel: 4,
    companyId: "C1002",
    technologyIds: ["T1000", "T1002", "T1004"],
  },
  {
    id: "E1005",
    firstName: "Tom",
    lastName: "Hanneman",
    jobLevel: 5,
    companyId: "C1003",
    technologyIds: ["T1000", "T1002", "T1004"],
  },
  {
    id: "E1006",
    firstName: "Jeff",
    lastName: "Araya",
    jobLevel: 3,
    companyId: "C1002",
    technologyIds: ["T1001", "T1003", "T1004"],
  },
  {
    id: "E1007",
    firstName: "Dave",
    lastName: "King",
    jobLevel: 5,
    companyId: "C1003",
    technologyIds: ["T1000", "T1002", "T1004"],
  },
];

exports.companies = [
  {
    id: "C1000",
    name: "Apple",
    description: "iPhone",
  },
  {
    id: "C1001",
    name: "Google",
    description: "Search",
  },
  {
    id: "C1002",
    name: "Microsoft",
    description: "Dev",
  },
  {
    id: "C1003",
    name: "Infosys",
    description: "Dev",
  },
];

exports.technologies = [
  {
    id: "T1000",
    name: "React",
    description: "UI Library",
  },
  {
    id: "T1001",
    name: "Angular",
    description: "UI framework",
  },
  {
    id: "T1002",
    name: "Vue",
    description: "UI framework",
  },
  {
    id: "T1003",
    name: "Svelte",
    description: "UI Library",
  },
  {
    id: "T1004",
    name: "Java",
    description: "Server side language",
  },
];
