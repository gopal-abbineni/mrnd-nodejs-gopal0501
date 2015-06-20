var contact = new Object();
contact.firstname = "jagan";
contact.lastname = "peri";
contact.phone = "23002300";
contact.anotherprop = "";
for(var property in contact){
console.log("property: " + property + " has value: ", contact[property]);
}