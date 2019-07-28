//main user model class
let userListModel = new mainUserList();
userListModel.Firstname = "Alex";
userListModel.Middlename = "J";
userListModel.Lastname = "Mercer";
userListModel.Age = 22;
userListModel.height = "5'9";
userListModel.weight = "59kg";
userListModel.bloodgroup = "A+ve";

//user address (multiple)
let userAddressObjArray = new Array();

let userAddressObj1 = new userListAddressModel();
userAddressObj1.userCity = "mumbai";
userAddressObj1.userPincode = "400012";
userAddressObj1.userState = "Maharashtra";

let userAddressObj2 = new userListAddressModel();
userAddressObj2.userCity = "Thane";
userAddressObj2.userPincode = "400601";
userAddressObj2.userState = "Maharashtra";

userAddressObjArray[0] = userAddressObj1;
userAddressObjArray[1] = userAddressObj2;

userListModel.userListAddress = userAddressObjArray;

//user contact (multiple)
let userContactObjArray = new Array();

let userContactObj1 = new userContactInfo();
userContactObj1.mobileNo = "059089017905";
userContactObj1.landline = "5781951";
userContactObj1.parentNo = "9874164166";
userContactObj1.emailID = "supremegod.of.war@gmail.com";

let userContactObj2 = new userContactInfo();
userContactObj2.mobileNo = "9598979171";
userContactObj2.landline = "25627222";
userContactObj2.parentNo = "9874164166";
userContactObj2.emailID = "supremegod.of.war.2@gmail.com";

userContactObjArray[0] = userContactObj1;
userContactObjArray[1] = userContactObj2;

userListModel.userListContact = userContactObjArray;

//user Id proof (wont be multiple XD)
let userListIdObjs = new userListIdProofs();

userListIdObjs.AadharNo = "4431 8729 1987";
userListIdObjs.PanNo = "F42H92FH5";
userListIdObjs.PassportNo = "IFJIO19F91GNMKQ19";

userListModel.userListId = userListIdObjs;

//output
console.log(userListModel.Firstname);
console.log(userListModel.Middlename);
console.log(userListModel.Lastname);
console.log(userListModel.height);
console.log(userListModel.weight);
console.log(userListModel.bloodgroup);

for (userListAddressObjs of userListModel.userListAddress) {
  console.log(userListAddressObjs.userCity);
  console.log(userListAddressObjs.userState);
  console.log(userListAddressObjs.userPincode);
}

for (userListContactObjs of userListModel.userListContact) {
  console.log(userListContactObjs.mobileNo);
  console.log(userListContactObjs.landline);
  console.log(userListContactObjs.parentNo);
  console.log(userListContactObjs.emailID);
}

console.log(userListModel.userListId.AadharNo);
console.log(userListModel.userListId.PassportNo);
console.log(userListModel.userListId.PanNo);
