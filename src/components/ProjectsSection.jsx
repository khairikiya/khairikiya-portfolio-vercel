import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DVMS (Vaccine distribution)",
    description:
      "A nationwide vaccine distribution platform designed to ensure efficient, transparent, and reliable delivery of vaccines across Indonesia",
    image: "/projects/project1.png",
    tags: ["Laravel", "Tailwind", "Postgresql"],
    demoUrl: "/projects/demo/dvms.jpg",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Haistok (E-commerce)",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Next.js", "MaterialUI"],
    demoUrl: "/projects/demo/haistock.jpg",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "DPORT (Car Rental)",
    description:
      "A modern car rental platform with integrated online payments and smart location selection, making it easy for customers to book vehicles securely and conveniently.",
    image: "/projects/project3.png",
    tags: ["React", "MySQL", "Tailwind"],
    demoUrl: "/projects/demo/dport.jpg",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Kelola Kisah (Landing Page)",
    description:
      "A psychology clinic landing page designed to provide a calming user experience, clear service information, and easy appointment booking for patients.",
    image: "/projects/project4.png",
    tags: ["CodeIgniter", "Bootstrap"],
    demoUrl: "/projects/demo/keki.png",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Pusat Karir PKR (Job Portal)",
    description:
      "A job portal platform designed to connect job seekers with employers through an intuitive interface, advanced search, and secure application process.",
    image: "/projects/project5.png",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    demoUrl: "/projects/demo/pusatkarir.jpg",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Hamac International (Company Profile)",
    description:
      "A company profile website for Hamac International, designed to showcase the brand’s vision, services, and global presence with a modern and professional interface",
    image: "/projects/project6.png",
    tags: ["React", "Node.js", "Tailwind"],
    demoUrl: "/projects/demo/hamac.jpg",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Khairikiya Portfolio",
    description:
      "A personal portfolio website designed to showcase projects, skills, and professional experience with a clean and modern layout.",
    image: "/projects/project7.png",
    tags: ["React", "Node.js", "Tailwind"],
    demoUrl: "/projects/demo/portfolio.png",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {" "}
                    {project.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="#"
          >
            ..and other private company projects that I can’t disclose here.
          </a>
        </div>
      </div>
    </section>
  );
};
