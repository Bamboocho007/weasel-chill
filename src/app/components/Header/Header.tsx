import { Login } from "./Login/Login";
import { Logo } from "./Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

export function Header(): React.ReactElement {
  return (
    <header>
      <Logo />
      <Navigation />
      <Login />
    </header>
  );
}
