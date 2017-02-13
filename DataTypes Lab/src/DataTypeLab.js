/**
 * Created by Taiwo Amao, email: amaotaiwo08@gmail.com on 2/11/2017.
 * This program takes in an argument and decides a course of action depending on the type of the argument!
 */

/** An override typeOf to handle objects that cannot be distinguished,
 * array, functions give their return type as object. This override function sought
 * to differentiate the array object as an array type , function object as a function type
 * and not categorized as object as usual...**/
function typeOf (obj) {
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

//definition of callback function
function callback(){}

// dataTypes function implemented with switch statement
function dataTypes(val) {
  var msg = "";  // Feedback Message

  switch (typeOf(val)) {
    // If type of data is string
    case 'string':
      if(val == ''){
        msg = 0;
      }else{
        msg = val.length;
      }
      break;
    //If type of data is null, it falls through that of undefined. They have the same feedback message.
    case 'null':
    case 'undefined':
      msg = "no value";
      break;
    //If type of data is boolean
    case 'boolean':
      if(val == true){
        msg = true;
      }else{
        msg = false;
      }
      break;
    //If type of data is number
    case 'number':
      if(val < 100){
        msg = "less than 100";
      }else if(val == 100){
        msg = "equal to 100";
      }else{
        msg = "more than 100";
      }
      break;
    //If type of object is array
    case 'array':
      // If the array does not contain upto 3 items
      if(val.length < 3){
        val = "undefined";  // Set the array to undefined
        msg = val.valueType;
        // If the array is empty
      }else if(val.length == 0){
        val = "undefined";  // Set the array to undefined
        msg = val.valueType;
      }else{
        msg = val[2];  // Otherwise if the array has more than 3 items then send the third item as the feedback message
      }
      break;
    // If the type of object is function
    case 'function':
       val(true);
       return "called callback";
      break;
    default:
      console.log("You must supply a value");
  }
  return msg;
}






