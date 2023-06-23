import { HydrateClientProvider } from "@/utils";
import { Footer, Header } from "./components";
import { AuthButtons } from "@/modules/auth";

export default async function Home() {
  return (
    <HydrateClientProvider state={null}>
      <Header />
      <main>
        main
        <AuthButtons />
      </main>
      <Footer />
    </HydrateClientProvider>
  );
}
