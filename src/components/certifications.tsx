import Image from "next/image";
import GitHubFoundations from "~/public/images/github-foundations.png";

export default function Certifications() {
  return (
    <div className="flex flex-row justify-evenly">
      <Image
        src={GitHubFoundations}
        width={150}
        height={150}
        alt="GitHub Foundations Certificate Badge"
      />
    </div>
  );
}
