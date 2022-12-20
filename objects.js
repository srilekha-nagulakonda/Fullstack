const user = {
  name: "",
  firstn: "first",
  lstn: "last",
  usernme: "srilekha",
  isLogged: true,
  9: 5,
  let: "hey",
  new: "value",
  setName: function () {
    return (this.name = this.firstn + this.lstn);
  },
};
user.setName();
console.log(user);
user.name = "mangal";
console.log(user);
user["usernme"] = "hrsh";
console.log(user["usernme"]);
let newkey = "uerid";
const value = 34;
user[newkey] = value;
console.log(user);

user.getName = function () {
  console.log(user.name);
};
user.getName();
