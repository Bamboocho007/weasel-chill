"use client";

import { getUser } from "@/clientApi/routes/users";
import { useQuery } from "@tanstack/react-query";

export default function UsersList({}: React.PropsWithChildren): React.ReactElement<HTMLDivElement> {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser("acc4fb7b-6ee0-4a14-b272-dd6725534c16"),
  });

  if (!user && isLoading) return <div>Loading</div>;

  return (
    <div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}
