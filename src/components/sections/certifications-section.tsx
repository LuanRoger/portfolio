import CertificationsBadge from "../certifications-badge";
import Link from "../link";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="space-y-2">
      <h2 className="text-xl font-bold">Certifications</h2>
      <CertificationsBadge />
      <ul className="list-disc space-y-4 pl-5">
        <li>
          <Link
            isExternal
            href="https://www.freecodecamp.org/certification/fcc3ae4e227-f746-4cb0-a5bc-eaffae04386b/foundational-c-sharp-with-microsoft"
          >
            Foundational C# with Microsoft (FreeCodeCamp)
          </Link>
        </li>
      </ul>
    </section>
  );
}
