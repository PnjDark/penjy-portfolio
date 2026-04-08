"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Skill = "Designer" | "Developer" | "Prompt Engineer" | "Manager";

interface SkillSelectorProps {
  onChange: (selected: Skill[]) => void;
}

export default function SkillSelector({ onChange }: SkillSelectorProps) {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const toggleSkill = (skill: Skill) => {
    const updated = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];
    setSelectedSkills(updated);
    onChange(updated);
  };

  const skills: Skill[] = ["Designer", "Developer", "Prompt Engineer", "Manager"];

  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ 
        display: "flex", 
        gap: "1rem", 
        flexWrap: "wrap",
        marginBottom: "1rem" 
      }}>
        {skills.map((skill) => {
          const isSelected = selectedSkills.includes(skill);
          return (
            <motion.button
              key={skill}
              onClick={() => toggleSkill(skill)}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.75rem 1.5rem",
                border: `2px solid var(--primary)`,
                borderRadius: "50px",
                background: isSelected ? "var(--primary)" : "transparent",
                color: isSelected ? "var(--background)" : "var(--primary)",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              aria-pressed={isSelected}
            >
              {skill}
            </motion.button>
          );
        })}
      </div>
      
      {selectedSkills.length === 0 && (
        <p style={{
          color: "var(--foreground)",
          opacity: 0.7,
          fontStyle: "italic",
          textAlign: "center"
        }}>
          Select skills to filter portfolio content...
        </p>
      )}
    </div>
  );
}