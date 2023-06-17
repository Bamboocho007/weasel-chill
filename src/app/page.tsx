import HydrateClientProvider from "@/utils/queryClient/hydrateQueryProvider";
import UsersList from "./users";
import getQueryClient from "@/utils/queryClient/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { getUser } from "@/clientApi/routes/users";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], () =>
    getUser("acc4fb7b-6ee0-4a14-b272-dd6725534c16")
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <HydrateClientProvider state={dehydratedState}>
        <UsersList />
      </HydrateClientProvider>
    </main>
  );
}
