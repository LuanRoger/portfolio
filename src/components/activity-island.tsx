import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { cn } from "@/utils/shadcn-utils";
import { FadeVignette } from "./fade-vignette";
import Link from "./link";

type ActivityIslandProps = {
  title: string;
  description: string;
  activityDescription: string;
  iconSrc: string | StaticImport;
  iconAlt: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  href?: string;
  accentColor?: string;
};

export default function ActivityIsland({
  title,
  description,
  activityDescription,
  iconSrc,
  iconAlt,
  imageSrc,
  imageAlt,
  href,
  accentColor,
}: ActivityIslandProps) {
  const titleDefaultClasses = "text-white font-bold";

  return (
    <div className="relative inset-shadow-xs isolate h-40 w-full overflow-clip rounded-lg">
      {accentColor && <FadeVignette accentColor={accentColor} />}
      <Image
        alt={imageAlt}
        className="absolute inset-0 z-0 size-full object-none"
        height={300}
        src={imageSrc}
        width={300}
      />
      <Image
        alt={imageAlt}
        className="absolute inset-0 -z-10 size-full object-cover blur-lg"
        height={30}
        src={imageSrc}
        width={30}
      />
      <div className="absolute z-20 flex size-full flex-col justify-between p-2">
        <div className="inline-flex items-center gap-2">
          <Image
            alt={iconAlt}
            className="invert filter"
            height={18}
            src={iconSrc}
            width={18}
          />
          <h2 className="text-sm">{activityDescription}</h2>
        </div>
        <div>
          {href ? (
            <Link className={cn(titleDefaultClasses)} href={href} isExternal>
              {title}
            </Link>
          ) : (
            <h1 className={cn(titleDefaultClasses)}>{title}</h1>
          )}
          <h2 className="text-sm text-white">{description}</h2>
        </div>
      </div>
    </div>
  );
}
