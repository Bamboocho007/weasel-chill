import HydrateClientProvider from "@/utils/queryClient/hydrateQueryProvider";
import getQueryClient from "@/utils/queryClient/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { getUser } from "@/clientApi/routes/users";
import { Footer, Header } from "./components";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], () =>
    getUser("acc4fb7b-6ee0-4a14-b272-dd6725534c16")
  );
  const dehydratedState = dehydrate(queryClient);

  const session = await getServerSession(options);
  console.log(session?.user);

  return (
    <HydrateClientProvider state={dehydratedState}>
      <Header />
      <main>main</main>
      <Footer />
    </HydrateClientProvider>
  );
}
