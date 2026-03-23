import { navigationLinks } from "../../helpers/navigationLinks";

export function createLinks() {
  return navigationLinks.map((link, idx) => (
    <p key={idx}>
      <a href={link.ref}>{link.name}</a>
    </p>
  ));
}