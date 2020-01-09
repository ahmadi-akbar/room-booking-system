import Room from "./Room";
import User from "./User";

Room.deleteMany().then(() => {
  console.log("Deleted rooms");
  process.exit();
});

User.deleteMany().then(() => {
  console.log("Deleted users");
  process.exit();
});
