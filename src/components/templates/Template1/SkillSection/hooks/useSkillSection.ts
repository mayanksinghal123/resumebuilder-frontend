import { useState } from "react";
import { initialSkills, type SkillItem } from "../types/propType";

const useSkillsSection = () => {
  const [skills, setSkills] = useState<SkillItem[]>(initialSkills);

  /**
   * Update skill field
   */
  const updateSkill = (
    id: number,
    key: keyof SkillItem,
    value: string,
  ) => {
    setSkills((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item,
      ),
    );
  };

  /**
   * Add new row
   */
  const addSkill = () => {
    setSkills((prev) => [
      ...prev,
      {
        id: Date.now(),
        category: "New Category",
        value: "Add skills here",
      },
    ]);
  };

  /**
   * Delete row
   */
  const deleteSkill = (id: number) => {
    setSkills((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    skills,

    updateSkill,
    addSkill,
    deleteSkill,
  };
};

export default useSkillsSection;