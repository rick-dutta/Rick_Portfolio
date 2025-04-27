import { GraduationCap, Briefcase, Code, Database, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <div className="min-h-[90vh] relative bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2C] text-white px-4 md:px-8">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/492e897e-f283-4203-aca6-44de8363afc1.png')] opacity-5 bg-cover bg-center" />
      <div className="max-w-6xl mx-auto pt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-[#2C1A2C] border-4 border-[#9b87f5]">
                <img
                  src="/lovable-uploads/d6841c78-d9ac-4dba-8eeb-55aa0cb37a01.png"
                  alt="Rick Dutta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rick Dutta
              <span className="text-[#9b87f5]">.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">Data Analyst | Python | Big Data | SQL | AWS | Apache Spark | Kafka | Airflow</p>
            <p className="text-gray-400 mb-8">Results-Oriented Data Engineer with expertise in building scalable data pipelines and implementing end-to-end ETL solutions.</p>
            <div className="flex gap-4 flex-wrap mb-4">
              <Button className="bg-[#9b87f5] hover:bg-[#8b77e5]">
                View Projects
              </Button>
              <Button variant="outline">
                Contact Me
              </Button>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <a 
                href="mailto:rickdutta89@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-[#9b87f5] transition-colors"
              >
                <Mail size={20} />
                rickdutta89@gmail.com
              </a>
              <a 
                href="tel:+917982522052"
                className="flex items-center gap-2 text-gray-300 hover:text-[#9b87f5] transition-colors"
              >
                <Phone size={20} />
                +91 7982522052
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Database className="w-8 h-8 text-[#9b87f5] mb-2" />
                <h3 className="font-semibold mb-2">Data Engineering</h3>
                <p className="text-sm text-gray-400">Expert in ETL processes and data pipeline development</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Code className="w-8 h-8 text-[#0EA5E9] mb-2" />
                <h3 className="font-semibold mb-2">Python & SQL</h3>
                <p className="text-sm text-gray-400">Advanced programming and database management</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Briefcase className="w-8 h-8 text-[#F97316] mb-2" />
                <h3 className="font-semibold mb-2">Cloud & Big Data</h3>
                <p className="text-sm text-gray-400">AWS, Apache Spark, and Kafka expertise</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-[#D946EF] mb-2" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-gray-400">Regular upskilling and certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
