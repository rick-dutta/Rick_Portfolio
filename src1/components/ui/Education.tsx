import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-[#2C1A2C]" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education & Certifications</h2>
        
        <Card className="bg-white/5 border-none text-white mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-[#9b87f5]" />
              <div>
                <h3 className="text-xl font-semibold text-[#9b87f5]">Bachelor of Technology - BTech, Mechanical Engineering</h3>
                <p className="text-gray-400">Dronacharya Group of Institutions Greater Noida</p>
                <p className="text-sm text-gray-500">Aug 2019 - Jun 2023</p>
                <p className="text-gray-300 mt-2">Grade: 7.6 CGPA</p>
                <p className="text-gray-400 mt-2">Activities: 3D CAD, Python, Design, Product Design, Volleyball, Team Clubs, Art and Culture, Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/5 border-none text-white">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-[#9b87f5]">Get in-depth understanding of Kafka & Zookeeper</h4>
              <p className="text-gray-400">Scaler</p>
              <p className="text-sm text-gray-500">Issued Apr 2025 · Expires Apr 2026</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-none text-white">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-[#9b87f5]">Python & Data Analytics</h4>
              <p className="text-gray-400">DevTown</p>
              <p className="text-sm text-gray-500">Issued Apr 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
