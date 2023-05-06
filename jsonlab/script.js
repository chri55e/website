const data = {
    "name": "John Smith",
    "age": 30,
    "email": "john.smith@example.com",
    "phone": {
      "home": "555-1234",
      "work": "555-5678"
    },
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "12345"
    },
    "education": [
      {
        "degree": "Bachelor's",
        "major": "Computer Science",
        "university": "University of California, Berkeley"
      },
      {
        "degree": "Master's",
        "major": "Computer Engineering",
        "university": "Stanford University"
      }
    ]
  };
  

console.log("Name", data.name);
console.log("Age", data.age);
console.log("Email", data.email);
console.log("Home Phone", data.phone.home);
console.log("Work Phone", data.phone.work);
console.log("Street Address", data.address.street);
console.log("City", data.address.city);
console.log("State", data.address.state);
console.log("Zip Code", data.address.zip);
console.log("Second Degree", data.education[1].degree);
