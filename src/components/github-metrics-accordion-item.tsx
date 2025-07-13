import { Suspense } from "react";
import { GitHubIcon } from "./svg-icons";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import GithubProfileMetrics from "./github-profile-metrics";

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
      <AccordionContent>
        <Suspense>
          <GithubProfileMetrics />
        </Suspense>
      </AccordionContent>
    </AccordionItem>
  );
}
