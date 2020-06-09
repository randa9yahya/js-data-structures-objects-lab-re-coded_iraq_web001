// Write your solution in this file!
let driver ={
}
function updateDriverWithKeyAndValue(driver,key,value) {
  driver[key]=value;
   return driver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({},driver)
  newDriver[key] = value
  return newDriver ;
}
 
function deleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
function destructivelyDeleteFromDriverByKey(driver,key){
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
}
console.log()

updateDriverWithKeyAndValue(driver,"name",'Sam')
 
//const newDriver = nondestructivelyUpdateObject(driver, 'address', ' 11 Broadway ');
