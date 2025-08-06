import GitHubFoundations from "~/public/images/github-foundations.png";
import MongoCertification from "~/public/images/mongodb-associate-developer.png";
import Link from "./link";
import TiltedCard from "./tilted-card";

export default function Certifications() {
  return (
    <div className="flex flex-row justify-evenly">
      <Link
        isExternal
        href="https://www.credly.com/badges/765dfe92-ebdf-4c5d-8839-75b674a8360f/public_url"
      >
        <TiltedCard
          imageSrc={GitHubFoundations.src}
          altText="GitHub Foundations Certificate Badge"
          imageWidth={150}
          imageHeight={150}
          rotateAmplitude={30}
          scaleOnHover={1.3}
        />
      </Link>
      <Link
        isExternal
        href="https://www.credly.com/badges/940e60e3-96b1-4595-96ee-9830d87081aa/public_url"
      >
        <TiltedCard
          imageSrc={MongoCertification.src}
          altText="MongoDB Associate Developer Certificate Badge"
          imageWidth={150}
          imageHeight={150}
          rotateAmplitude={30}
          scaleOnHover={1.3}
        />
      </Link>
    </div>
  );
}
