import Link from "../link";
import MyProjectsList from "../my-projects-list";

export default function ProjectsSection() {
  return (
    <section className="space-y-2" id="projects">
      <h2 className="font-bold text-xl">Projects</h2>
      <MyProjectsList />
      <Link
        className="text-sm"
        href={"https://github.com/stars/LuanRoger/lists/ready-to-use"}
      >
        Check out more 🚀
      </Link>
    </section>
  );
}
