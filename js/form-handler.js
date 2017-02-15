function capture(){
  console.log("in the func");
  console.log(document.custInfo.name.value);
  console.log(document.custInfo.age.value);
  event.preventDefault();
}