import { CreateOpject } from "../controllers/Auth/authInterface";
import { tblUser } from "../models/tblUser";

class UserRepo {
  public static async findByEmail(email: string) {
    return tblUser.findOne({ where: { email } });
  }

  public static async createUser(createObject: CreateOpject) {
    return tblUser.create(createObject);
  }
}

export default UserRepo;
