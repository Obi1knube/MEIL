import { navigationLinks } from "../../helpers/navigationLinks";

export function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}>
      <a href={e.ref}> {e.name} </a>
    </p>
  ));
}
