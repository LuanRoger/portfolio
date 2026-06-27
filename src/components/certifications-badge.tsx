import GitHubActions from "~/public/images/github-actions.png";
import GitHubFoundations from "~/public/images/github-foundations.png";
import MongoCertification from "~/public/images/mongodb-associate-developer.png";
import Link from "./link";
import TiltedCard from "./tilted-card";

export default function CertificationsBadge() {
  return (
    <div className="flex flex-col md:flex-row md:justify-evenly">
      <Link
        href="https://www.credly.com/badges/940e60e3-96b1-4595-96ee-9830d87081aa/public_url"
        isExternal
      >
        <TiltedCard
          altText="MongoDB Associate Developer Certificate Badge"
          imageHeight={150}
          imageSrc={MongoCertification}
          imageWidth={150}
          rotateAmplitude={30}
          scaleOnHover={1.3}
        />
      </Link>
      <Link
        href="https://www.credly.com/badges/765dfe92-ebdf-4c5d-8839-75b674a8360f/public_url"
        isExternal
      >
        <TiltedCard
          altText="GitHub Foundations Certificate Badge"
          imageHeight={150}
          imageSrc={GitHubFoundations}
          imageWidth={150}
          rotateAmplitude={30}
          scaleOnHover={1.3}
        />
      </Link>
      <Link
        href="https://learn.microsoft.com/api/credentials/share/en-us/LuanRoger-6971/FF6CF442470AE07?sharingId=58975929453A7CF5"
        isExternal
      >
        <TiltedCard
          altText="GitHub Actions Certificate Badge"
          imageHeight={150}
          imageSrc={GitHubActions}
          imageWidth={150}
          rotateAmplitude={30}
          scaleOnHover={1.3}
        />
      </Link>
    </div>
  );
}
