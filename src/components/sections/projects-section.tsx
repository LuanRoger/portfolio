import Link from "../link";
import MyProjectsList from "../my-projects-list";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-2">
      <h2 className="text-xl font-bold">Projects</h2>
      <MyProjectsList />
      <Link
        href={"https://github.com/stars/LuanRoger/lists/ready-to-use"}
        className="text-sm"
      >
        Check out more 🚀
      </Link>
    </section>
  );
}
