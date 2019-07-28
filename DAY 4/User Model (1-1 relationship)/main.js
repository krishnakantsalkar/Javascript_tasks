// ONE to ONE relationship (i.e when user has only 1 data in each section)
let userModel = new mainUser(); //call main function & create instance
userModel.Firstname = "Alex";
userModel.Middlename = "J";
userModel.Lastname = "Mercer";
userModel.Age = 22;
userModel.height = "5'9";
userModel.weight = "59kg";
userModel.bloodgroup = "A+ve";

let userAddressObject = new userAddressModel(); //create new instance of dependant and semidependant objs
userAddressObject.userCity = "mumbai";
userAddressObject.userPincode = "400012";
userAddressObject.userState = "maharashtra";

userModel.userAddress = userAddressObject; //put this entire instance inside main class's dependant variable

let userContactObject = new userContactInfo();
userContactObject.landline = "12458900";
userContactObject.mobileNo = "5891589111";
userContactObject.parentNo = "4716486188";
userContactObject.emailID = "supremegod.of.war@gmail.com";

userModel.userContact = userContactObject;

let userIdProofsObject = new userIdProofs();
userIdProofsObject.AadharNo = "4454 8466 4799";
userIdProofsObject.PassportNo = "FHQFIA30QFN3A";
userIdProofsObject.PanNo = "F09FCA0ET4";

userModel.userId = userIdProofsObject;

//output of one to one relationship
console.log(userModel.Firstname);
console.log(userModel.Middlename);
console.log(userModel.Lastname);
console.log(userModel.height);
console.log(userModel.weight);
console.log(userModel.bloodgroup);
console.log(userModel.userAddress.userCity);
console.log(userModel.userAddress.userState);
console.log(userModel.userAddress.userPincode);
console.log(userModel.userContact.mobileNo);
console.log(userModel.userContact.parentNo);
console.log(userModel.userContact.landline);
console.log(userModel.userId.AadharNo);
console.log(userModel.userId.PassportNo);
console.log(userModel.userId.PanNo);
