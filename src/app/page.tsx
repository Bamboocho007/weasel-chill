import { HydrateClientProvider } from "@/lib";
import { getQueryClient } from "@/lib";
import { dehydrate } from "@tanstack/react-query";
import { getUser } from "@/clientApi/routes/users";
import { Footer, Header } from "./components";
import { AuthButtons } from "@/modules/auth";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], () =>
    getUser("acc4fb7b-6ee0-4a14-b272-dd6725534c16")
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateClientProvider state={dehydratedState}>
      <Header />
      <main>
        main
        <AuthButtons />
      </main>
      <Footer />
    </HydrateClientProvider>
  );
}
