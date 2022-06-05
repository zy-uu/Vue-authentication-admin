export default class User {
    constructor(username, email, password, roles) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.roles = roles;
    }
  }
  
  // A constructor is a special function that creates 
  // and initializes an object instance of a class,
  // a constructor gets called when an object is created using
  //the new keyword. The purpose of a constructor is to create a new object 
  //and set values for any existing object properties.