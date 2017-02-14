/**
 Created by Taiwo Amao , emailadrress: amaotaiwo08@gmail.com on the 2/13/2017

 */

// Demonstrating OOP in Javascript

function User (theFName, theLName, theEmail) {
  this.Fname = theFName;
  this.LName = theLName;
  this.email = theEmail;

}

User.prototype = {
  constructor: User,
  getFullName:function ()  {
    return this.Fname + " " + this.LName;
  },
  showEmail:function ()  {
    return "Email: " + this.email;
  },
  changeEmail:function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
  }
}

// A User
firstUser = new User("Richard","Johnson", "Richard@ple.com");
console.log(firstUser.showEmail());
console.log(firstUser.changeEmail("Richard@gmail.com"));



// Another User
secondUser = new User("Peter", "Mike", "Peter@ple.com");
console.log(secondUser.showEmail());
console.log(secondUser.changeEmail("peter@yahoo.com"));