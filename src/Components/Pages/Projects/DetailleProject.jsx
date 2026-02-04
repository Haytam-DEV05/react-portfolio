import { useParams, useNavigate } from "react-router";
import { DataProjects } from "../../../Data/DataProjects";

export default function DetailleProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = DataProjects.find((p) => p.id == id);

  if (!project) {
    return (
      <div>
        <button
          onClick={() => navigate(-1)}
          className="mb-1 text-(--primary) hover:underline"
        >
          ← Back to projects
        </button>
        <p className="text-center text-[50px] font-bold font-serif">
          Project Not Available
        </p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="container max-w-4xl mx-auto bg-(--hover) p-6 rounded-xl shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-(--primary) hover:underline"
        >
          ← Back to projects
        </button>

        <img
          src={project.img_path}
          alt={project.title}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h1 className="text-[32px] font-semibold text-(--primary) mt-4">
          {project.title}
        </h1>

        <p className="text-[16px] mt-3 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex gap-4">
          {project.github_path && (
            <a
              href={project.github_path}
              target="_blank"
              className="bg-(--primary) text-white px-6 py-2 rounded-full"
            >
              GitHub
            </a>
          )}

          {project.live_path && (
            <a
              href={project.live_path}
              target="_blank"
              className="bg-(--soft) text-(--text) px-6 py-2 rounded-full"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
