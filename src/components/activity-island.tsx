import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "./link";
import { cn } from "@/utils/shadcn-utils";

interface ActivityIslandProps {
  title: string;
  description: string;
  activityDescription: string;
  iconSrc: string | StaticImport;
  iconAlt: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  href?: string;
  accentColor?: string;
}

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
    <div className="relative isolate h-36 w-full overflow-clip rounded-lg">
      {accentColor && (
        <div
          className={`absolute z-10 size-full bg-linear-to-t`}
          style={
            {
              "--tw-gradient-to": accentColor,
              "--tw-gradient-from-position": "",
              "--tw-gradient-from": `${accentColor}00`,
              "--tw-gradient-to-position": "",
              "--tw-gradient-stops":
                "var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
            } as React.CSSProperties
          }
        />
      )}
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt={imageAlt}
        className="absolute inset-0 z-0 size-full object-none"
      />
      <div className="absolute z-20 flex size-full flex-col justify-between p-2">
        <div className="inline-flex items-center gap-2">
          <Image
            src={iconSrc}
            width={18}
            height={18}
            alt={iconAlt}
            className="invert filter"
          />
          <h2 className="text-sm">{activityDescription}</h2>
        </div>
        <div>
          {!!href ? (
            <Link href={href} isExternal className={cn(titleDefaultClasses)}>
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
