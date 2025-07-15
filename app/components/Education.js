import Section from './Section';
import Card from './Card';

export default function Education() {
  const education = [
    {
      degree: "Computer Science",
      school: "Universidad de las Ciencias Informáticas (UCI)",
      period: "Graduated",
      location: "Havana, Cuba",
      description: "Specialized in computer science with focus on software engineering and system architecture. Contributed to university publications and research projects.",
      achievements: [
        "Featured in university publications",
        "Contributed to research projects",
        "Strong foundation in software engineering principles",
        "Academic excellence in computer science"
      ]
    }
  ];

  return (
    <Section title="Education" id="education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="p-6" hover>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-600 text-sm">
                  {edu.location}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {edu.period}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              {edu.description}
            </p>
            
            <ul className="space-y-2">
              {edu.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-blue-600 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}