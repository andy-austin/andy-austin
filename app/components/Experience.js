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
    }
  ];

  return (
    <Section title="Experience" id="experience">
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