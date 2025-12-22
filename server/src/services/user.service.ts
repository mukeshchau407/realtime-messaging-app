import UserModel from "../models/user.model";

export const findByIdUserService = async (userId: string) => {
  return await UserModel.findById(userId);
};
