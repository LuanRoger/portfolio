import { Suspense } from "react";
import ActivitiesIsland from "../activity-island/activities-island";
import NameHeader from "../name-header";
import TechStack from "../tech-stack";

export default function HeroSection() {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col gap-2">
        <NameHeader />
        <Suspense>
          <ActivitiesIsland className="block md:hidden" />
        </Suspense>
        <TechStack />
      </div>
      <Suspense>
        <ActivitiesIsland className="hidden md:block" />
      </Suspense>
    </section>
  );
}
