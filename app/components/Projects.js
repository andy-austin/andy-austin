import Section from './Section';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';

export default function Projects() {
  const projects = [
    {
      title: "lit-image-cropper",
      description: "Fast and easy image cropping web component built with Lit. A modern, lightweight solution for image manipulation in web applications.",
      tech: ["TypeScript", "Lit", "Web Components", "CSS"],
      stars: 10,
      githubUrl: "https://github.com/andy-austin/lit-image-cropper",
      highlights: [
        "Built with modern web standards",
        "Lightweight and performant",
        "Easy integration with any framework",
        "Responsive design"
      ]
    },
    {
      title: "django-loan-payment-calculator",
      description: "A Django-based loan payment calculator developed as a code challenge. Demonstrates clean architecture and financial calculations.",
      tech: ["Python", "Django", "Financial Modeling", "REST API"],
      stars: 0,
      githubUrl: "https://github.com/andy-austin/django-loan-payment-calculator",
      highlights: [
        "Clean Django architecture",
        "Financial calculation algorithms",
        "RESTful API design",
        "Test-driven development"
      ]
    }
  ];

  return (
    <Section title="Featured Projects" id="projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 flex flex-col" hover>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {project.stars}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <Badge key={idx} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <span className="text-blue-600 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Button 
                href={project.githubUrl} 
                variant="outline" 
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          href="https://github.com/andy-austin" 
          variant="primary" 
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Projects on GitHub
        </Button>
      </div>
    </Section>
  );
}