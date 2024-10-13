import WorkXp from "../work-xp";

export default function ExpirienceSection() {
  return (
    <section id="expirience" className="space-y-2">
      <h2 className="text-xl font-bold">Expirience</h2>
      <p>
        In addition to my professional work, I also maintain open-source
        projects and libraries, that together, have more than 200 stars in
        repositories and 8,000 downloads.
      </p>
      <ul className="space-y-4">
        <WorkXp
          company="Aramis"
          position="Software Engineer"
          startDate="10/2024"
          endDate="Present"
          description=""
        />
        <WorkXp
          company="Mais Informa"
          position="Tech Lead"
          startDate="01/2024"
          endDate="Present"
          description="I have the task of developing all the solutions for disseminating information, a news portal and a newsletter, with the lowest possible operating costs. To do this, I lead two squads that develop one solution each. Some of the tools we use to maintain the newsletter were developed in-house for the exclusive use of the project, to help the news team's process."
        />
        <WorkXp
          company="LearningLab"
          position="Back-end developer (volunteer)"
          description="I was part of a team assigned to create a platform that would be used by students and teachers to share school content. I designed the entire .NET back-end architecture that we were going to use and created the authentication and authorization functionalities. I also helped create the documentation for the back-end and helped the team integrate with other parts of the solution."
          startDate="08/2023"
          endDate="10/2024"
        />
      </ul>
    </section>
  );
}
