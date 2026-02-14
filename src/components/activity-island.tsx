import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { cn } from "@/utils/shadcn-utils";
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
  const titleDefaultClasses =
    "text-white font-bold text-sm text-ellipsis line-clamp-2";

  return (
    <div className="relative h-28 w-full overflow-clip">
      <div
        className="absolute inset-ring inset-ring-primary z-10 size-full"
        style={
          accentColor
            ? { boxShadow: `inset 0 0 7px ${accentColor}` }
            : undefined
        }
      />
      <Image
        alt={imageAlt}
        className="absolute inset-0 z-10 size-full object-none opacity-50"
        height={300}
        src={imageSrc}
        width={300}
      />
      <Image
        alt={imageAlt}
        className="absolute inset-0 z-0 size-full object-cover opacity-50 blur-lg"
        height={30}
        src={imageSrc}
        width={30}
      />
      <div className="absolute z-10 flex size-full flex-col justify-between p-2">
        <div className="inline-flex gap-1 text-xs">
          <Image
            alt={iconAlt}
            className="invert filter"
            height={12}
            src={iconSrc}
            width={12}
          />
          {activityDescription}
        </div>
        <p>
          {href ? (
            <Link className={cn(titleDefaultClasses)} href={href} isExternal>
              {title}
            </Link>
          ) : (
            <span className={cn(titleDefaultClasses)}>{title}</span>
          )}
          <span className="text-sm text-white">{description}</span>
        </p>
      </div>
    </div>
  );
}
