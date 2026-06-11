import { skills, experience } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Technical Skills
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Proficiency in modern backend, DevOps, and full-stack technologies built
            through production experience at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">{skill.name}</span>
                      <span className="text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Building and scaling systems at some of the most demanding technical environments.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.company}
              className="relative border-l-2 border-border pl-6 pb-6"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />

              <div className="space-y-2">
                <p className="text-sm text-accent font-semibold uppercase tracking-wide">
                  {exp.period}
                </p>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-muted">{exp.company}</p>
                <p className="text-muted mt-2">{exp.description}</p>

                {exp.highlights && (
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-accent mt-1 block">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
