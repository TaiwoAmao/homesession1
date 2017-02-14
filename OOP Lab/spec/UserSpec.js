/**
 * Created by TimmyBoi on 2/13/2017.
 */
(function(){
  'use strict';
  describe("User Class: Create a User", function() {

    it("The user should be a type of `object`, and an instance of the `User` class", function() {
      var Student = new User('Taiwo', 'Amao', 'amaotaiwo@gmail.com');
      expect(typeof Student).toEqual(typeof {});
      expect(Student instanceof User).toBeTruthy();
    });

    it("Accessing First Name and Last Name property", function() {
      var Teacher  = new User('David', 'Maxwell', 'maxwell@yahoo.com');
      expect(Teacher.Fname).toBe('David');
      expect(Teacher.LName).toBe('Maxwell');
    });

    it("The getFullName method should return a both First Name and Last Name", function() {

      var Businessman = new User("Jacob", "Jaxson", "jax@gg.com");
      expect(Businessman.getFullName()).toEqual("Jacob Jaxson");

    });

    it("The getFullName method should return a both First Name and Last Name", function() {

      var Trader = new User("Sola", "Dele", "jax@gg.com");
      expect(Trader.getFullName()).toEqual("Sola Dele");

    });

    it("ChangeEmail should return new Email", function(){

      var Expertuser = new User("Bill", "Gates", "bill@gmail.com");
      expect(Expertuser.changeEmail("bill@microsoft.com")).toEqual("New Email Saved: " + "bill@microsoft.com");

    })

    it("ChangeEmail should return new Email", function(){

      var Expertuser = new User("Steve", "Jobs", "steve@apple.com");
      expect(Expertuser.changeEmail("stevejobs@apple.com")).toEqual("New Email Saved: " + "stevejobs@apple.com");

    })

    it("Accessing First Name and Last Name property", function() {
      var Parent  = new User('Amos', 'Nanfe', 'amos@yahoo.com');
      expect(Parent.Fname).toBe('Amos');
      expect(Parent.LName).toBe('Nanfe');
    });
  });
})();