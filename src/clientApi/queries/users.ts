import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getUser } from "../routes";
import { PublicUser } from "../models";

export const userQueryKey = (userId: string) => ["user", userId];

export function useUserQuery(
  userId: string
): UseQueryResult<PublicUser, unknown> {
  return useQuery(userQueryKey(userId), () => getUser(userId));
}
