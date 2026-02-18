import { SkillCard } from "@/components/ui/skill-card";

const skills = ["Plumber", "Electrician", "Carpenter", "Painter", "Welder", "Mason"];

export default function CustomerHomePage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Find skilled workers</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
