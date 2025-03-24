import Image from "next/image";
import GitHubFoundations from "~/public/images/github-foundations.png";
import Link from "./link";

export default function Certifications() {
  return (
    <div className="flex flex-row justify-evenly">
      <Link isExternal href="https://www.credly.com/badges/765dfe92-ebdf-4c5d-8839-75b674a8360f/linked_in_profile">
        <Image
          src={GitHubFoundations}
          width={150}
          height={150}
          alt="GitHub Foundations Certificate Badge"
        />
      </Link>
    </div>
  );
}
