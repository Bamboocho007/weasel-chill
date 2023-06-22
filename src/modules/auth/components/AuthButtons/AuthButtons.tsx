"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButtons(): React.ReactElement {
  const session = useSession();

  if (session.status !== "authenticated") {
    return <button onClick={() => signIn()}>signIn</button>;
  }

  return (
    <>
      <button onClick={() => signOut()}>signOut</button>
    </>
  );
}
