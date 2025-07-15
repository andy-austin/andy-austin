import Section from './Section';
import Card from './Card';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Howdy™",
      period: "Current",
      location: "Montevideo, Uruguay",
      description: "Designing microservice-oriented architecture and developing scalable software solutions. Contributing to technical discussions about serverless architecture, microservices, and code quality best practices.",
      highlights: [
        "Designed and implemented microservice-oriented architecture",
        "Contributed to serverless architecture solutions",
        "Mentored team members on code quality and best practices",
        "Optimized system performance and scalability"
      ]
    },
    {
      title: "Software Developer",
      company: "Qubierto",
      period: "Previous",
      location: "Remote",
      description: "Developed enterprise collaboration platform helping companies find and connect with skilled professionals. Built scalable web applications using modern technologies.",
      highlights: [
        "Developed enterprise collaboration platform",
        "Built scalable web applications",
        "Implemented user matching algorithms",
        "Optimized database performance"
      ]
    },
    {
      title: "Software Developer",
      company: "BiselMed",
      period: "Previous",
      location: "Remote",
      description: "Contributed to healthcare technology solutions, developing medical software applications with focus on user experience and data security.",
      highlights: [
        "Developed healthcare technology solutions",
        "Implemented secure medical software applications",
        "Focused on user experience and data security",
        "Collaborated with medical professionals on requirements"
      ]
    },
    {
      title: "Software Developer",
      company: "Cuba VIP Travel",
      period: "Previous",
      location: "Remote",
      description: "Developed travel management dashboard and booking system. Created user-friendly interfaces for travel planning and management.",
      highlights: [
        "Built travel management dashboard",
        "Developed booking system functionality",
        "Created user-friendly travel planning interfaces",
        "Integrated with external travel APIs"
      ]
    }
  ];

  return (
    <Section title="Experience" id="experience" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-6" hover>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 text-sm">
                  {exp.location}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {exp.period}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              {exp.description}
            </p>
            
            <ul className="space-y-2">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-blue-600 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}