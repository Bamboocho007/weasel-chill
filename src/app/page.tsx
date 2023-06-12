import HydrateClientProvider from "@/utils/queryClient/hydrateQueryProvider";
import UsersList from "./users";
import getQueryClient from "@/utils/queryClient/getQueryClient";
import { dehydrate } from "@tanstack/react-query";

export async function getUser() {
  const res = await fetch("http://localhost:3000/api/users/1");
  return await res.json();
}

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], getUser);
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <HydrateClientProvider state={dehydratedState}>
        <UsersList />
      </HydrateClientProvider>
    </main>
  );
}
