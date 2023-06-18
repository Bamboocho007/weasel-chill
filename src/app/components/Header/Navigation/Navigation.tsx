import Link from "next/link";

export function Navigation(): React.ReactElement {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/dashboard">dashboard</Link>
    </nav>
  );
}
