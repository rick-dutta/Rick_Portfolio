import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#2C1A2C]" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Work Experience</h2>
        <div className="space-y-6">
          <Card className="bg-white/5 border-none text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-[#9b87f5]">Software Testing Engineer</h3>
              <p className="text-gray-400">Giesecke+Devrient</p>
              <p className="text-sm text-gray-500">May 2023 - Jan 2024 · 9 mos</p>
              <p className="text-gray-300 mt-4">Skills: Team Management, Leadership</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border-none text-white">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-[#9b87f5]">System Engineer</h3>
              <p className="text-gray-400">Giesecke+Devrient</p>
              <p className="text-sm text-gray-500">Nov 2022 - May 2023 · 7 mos</p>
              <p className="text-gray-300 mt-4">Skills: Azure DevOps Services, Microsoft Azure</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
