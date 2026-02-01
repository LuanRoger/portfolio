import { Suspense } from "react";
import GithubProfileMetrics from "./github-profile-metrics";
import Link from "./link";
import { GitHubIcon } from "./svg-icons";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
        <div className="flex justify-between self-end text-muted-foreground text-sm">
          <Link
            className="inline-flex items-center gap-2 self-end font-medium"
            href={"https://docs.github.com/en/rest"}
            isExternal
          >
            Powered by{" "}
            <GitHubIcon className="inline-block size-5 fill-muted-foreground" />
          </Link>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
