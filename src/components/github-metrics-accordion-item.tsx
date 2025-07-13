import { Suspense } from "react";
import { GitHubIcon } from "./svg-icons";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import GithubProfileMetrics from "./github-profile-metrics";
import Link from "./link";

interface GithubMetricsAccordionItemProps {
  value: string;
}

export default function GithubMetricsAccordionItem({
  value,
}: GithubMetricsAccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="inline-flex items-center gap-2">
        <span className="inline-flex items-center gap-2">
          <GitHubIcon className="size-4 fill-white" />
          GitHub Metrics
        </span>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <Suspense>
          <GithubProfileMetrics />
        </Suspense>
        <div className="text-muted-foreground flex justify-between self-end text-sm">
          <Link
            href={"https://docs.github.com/en/rest"}
            isExternal
            className="inline-flex items-center gap-2 self-end font-medium"
          >
            Powered by{" "}
            <GitHubIcon className="fill-muted-foreground inline-block size-5" />
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
