import Section from './Section';
import Card from './Card';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "LoudCrowd",
      period: "Mar 2024 - Present",
      location: "Montevideo, Uruguay · Remote",
      description: "Full-time senior software engineer role focusing on React web applications and custom Shopify extensions for influencer marketing platform.",
      highlights: [
        "Maintained and extended a React JS web app and built custom Shopify extensions",
        "Developed native influencer storefronts using modern web components (Lit)",
        "Built and maintained Python backend services deployed via AWS Lambda",
        "Designed and implemented ETL pipelines to ingest and normalize third-party data into LoudCrowd's core systems"
      ],
      skills: ["Python", "JavaScript", "Lit", "Cloud Computing", "AWS", "ETL"]
    },
    {
      title: "Senior Software Engineer",
      company: "Howdy.com",
      period: "Feb 2021 - Present",
      location: "Uruguay · Hybrid",
      description: "Senior software engineer role with focus on microservice architecture and cloud platform development using Python and Google Cloud Platform.",
      highlights: [
        "Design microservice oriented architecture based on python",
        "Work with many Google Cloud Platform solutions and tools",
        "Develop REST & GraphQL API's using Django Rest Framework & Django Graphene",
        "Build new software solutions from scratch"
      ],
      skills: ["Python", "JavaScript", "Microservices", "Kubernetes", "Web Components", "GraphQL", "REST APIs", "Google Cloud Platform"]
    },
    {
      title: "Contract Software Engineer",
      company: "Truepill",
      period: "Feb 2022 - Oct 2022",
      location: "Uruguay",
      description: "Contract software engineering role through Austin Software as a Software consultant, working on healthcare technology solutions.",
      highlights: [
        "Working for Truepill through Austin Software as a Software consultant",
        "Maintain various solutions written in Python and JavaScript (NodeJS, ReactJS)",
        "Review pull requests as part of the development process",
        "Working in an agile work environment guided by SCRUM"
      ],
      skills: ["Python", "JavaScript", "GraphQL", "REST APIs", "Node.js"]
    },
    {
      title: "Contract Software Engineer",
      company: "Scalable Path",
      period: "Nov 2021 - May 2022",
      location: "Montevideo, Uruguay",
      description: "Part-time contract role working on data migration and analytics projects for BuzzFeed Media Company.",
      highlights: [
        "Migrate asynchronous services written in Python for BuzzFeed Media Company",
        "Write SQL queries and materialized views for Google BigQuery",
        "Analyze logs using Datadog in order to guarantee good performance"
      ],
      skills: ["Python", "Google Cloud Platform", "SQL", "Google BigQuery", "Datadog"]
    },
    {
      title: "Software Engineer",
      company: "Ascentis Human Capital Management Software",
      period: "Jul 2019 - Feb 2021",
      location: "Montevideo, Uruguay",
      description: "Full-time software engineer role developing user interfaces and supporting microservices for HR management platform.",
      highlights: [
        "Develop user interfaces for Ascentis reporting module using ReactJS",
        "Support Ascentis reporting micro-services written in Java & C#",
        "Review and merge JavaScript code for new product features",
        "Participate in behavioral interviews as part of hiring process"
      ],
      skills: ["JavaScript", "Microservices", "Docker", "React.js", "Java", "REST APIs"]
    },
    {
      title: "Full Stack Software Engineer",
      company: "TourinfoSys",
      period: "Apr 2016 - Jan 2020",
      location: "Havana, Cuba",
      description: "Full-time full-stack developer role designing and developing tourism platforms and travel websites.",
      highlights: [
        "Designed and Developed TourinfoSys platform",
        "Developed Cuba VIP Yacht Web Site",
        "Developed Cuba Tours and Travels Web Site"
      ],
      skills: ["Python", "JavaScript", "REST APIs"]
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
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
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
            
            <ul className="space-y-2 mb-4">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <span className="text-blue-600 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
            
            {exp.skills && (
              <div className="mt-4">
                <span className="text-sm font-medium text-gray-700 mr-2">Skills:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}