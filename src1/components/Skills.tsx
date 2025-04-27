import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { category: "Data Engineering", items: ["ETL Tools", "Data Modeling", "Data Management", "Data Manipulation"] },
    { category: "Databases", items: ["MySQL", "Apache Cassandra", "HBase", "PostgreSQL"] },
    { category: "Big Data", items: ["Apache Kafka", "Apache ZooKeeper", "Hadoop", "HDFS"] },
    { category: "Cloud & Tools", items: ["AWS", "Azure DevOps", "Airflow", "Continuous Integration"] },
  ];

  return (
    <section className="py-20 bg-[#1A1F2C]" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.category} className="bg-white/5 border-none text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
