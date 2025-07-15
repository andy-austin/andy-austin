import Section from './Section';
import Badge from './Badge';

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "TypeScript", "JavaScript", "React"]
    },
    {
      category: "Technologies & Frameworks",
      skills: ["React", "Web Components", "Lit", "Django", "Next.js"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Cloud Technologies", "Serverless Architecture", "Microservices"]
    },
    {
      category: "Architecture & Design",
      skills: ["Microservice Architecture", "System Design", "API Design", "Scalable Systems"]
    },
    {
      category: "Development Practices",
      skills: ["Code Review", "TDD", "Agile", "CI/CD", "Git"]
    }
  ];

  const achievements = [
    "🏆 Pair Extraordinaire (x3)",
    "🎯 YOLO",
    "🦈 Pull Shark (x3)",
    "⚡ Quickdraw"
  ];

  return (
    <Section title="Skills & Achievements" id="skills" className="bg-gray-50">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="tech">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">GitHub Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className="text-lg mr-3">{achievement.split(' ')[0]}</span>
                <span>{achievement.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">GitHub Stats</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Repositories:</span>
                <span className="font-medium">14</span>
              </div>
              <div className="flex justify-between">
                <span>Stars:</span>
                <span className="font-medium">9</span>
              </div>
              <div className="flex justify-between">
                <span>Followers:</span>
                <span className="font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}