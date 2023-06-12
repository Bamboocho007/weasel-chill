"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "./page";

export default function UsersList({}: React.PropsWithChildren): React.ReactElement<HTMLDivElement> {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (!user && isLoading) return <div>Loading</div>;

  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}
