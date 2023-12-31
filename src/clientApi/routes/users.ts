import { axiosClient } from "@/utils";
import { PublicUser } from "../models";

export const getUser = async (userId: string): Promise<PublicUser> =>
  await axiosClient.get<PublicUser>(`/users/${userId}`).then((res) => res.data);
