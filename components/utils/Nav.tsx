import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface props extends ComponentPropsWithoutRef<"nav"> {
  closeFnc?: () => void;
}

export default function Nav({ closeFnc, ...props }: props) {
  return (
    <nav>
      <ul {...props}>
        <li>
          <Link href="/" onClick={closeFnc}>
            Strona Główna
          </Link>
        </li>
        <li>
          <Link href="/#o-mnie" onClick={closeFnc}>
            O mnie
          </Link>
        </li>
        <li>
          <Link href="/#przebieg-sesji" onClick={closeFnc}>
            Przebieg Sesji
          </Link>
        </li>
        <li>
          <Link href="/FAQ" onClick={closeFnc}>
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/#kontakt" onClick={closeFnc}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link href="/#cennik" onClick={closeFnc}>
            Cennik
          </Link>
        </li>
      </ul>
    </nav>
  );
}
