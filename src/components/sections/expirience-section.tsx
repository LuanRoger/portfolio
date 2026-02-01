import WorkXp from "../work-xp";

export default function ExpirienceSection() {
  return (
    <section className="space-y-2" id="expirience">
      <h2 className="font-bold text-xl">Expirience</h2>
      <ul className="space-y-4">
        <WorkXp
          company="Aramis"
          description="Aramis is a menswear brand that has been on the market for almost 30 years. I work as a full-stack developer, helping the brand achieve its goal of technological revolution, creating and maintaining large-scale distributed micro-services, as well as developing dynamic UIs that provide an intuitive and efficient user experience, connecting customers and partners to the brand in an innovative and personalized way."
          endDate="Present"
          position="Software Engineer"
          startDate="10/2024"
        />
        <WorkXp
          company="Mais Informa"
          description="I have the task of developing all the solutions for disseminating information, a news portal and a newsletter, with the lowest possible operating costs. To do this, I lead two squads that develop one solution each. Some of the tools we use to maintain the newsletter were developed in-house for the exclusive use of the project, to help the news team's process."
          endDate="Present"
          position="Tech Lead"
          startDate="01/2024"
        />
        <WorkXp
          company="LearningLab"
          description="I was part of a team assigned to create a platform that would be used by students and teachers to share school content. I designed the entire .NET back-end architecture that we were going to use and created the authentication and authorization functionalities. I also helped create the documentation for the back-end and helped the team integrate with other parts of the solution."
          endDate="10/2024"
          position="Back-end developer (volunteer)"
          startDate="08/2023"
        />
      </ul>
      <p>
        💡 In addition to my professional work, I also maintain open-source
        projects and libraries, that together, have more than 200 stars in
        repositories and 8,000 downloads.
      </p>
    </section>
  );
}
