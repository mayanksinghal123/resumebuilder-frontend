import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  TextRun,
  type ISectionOptions,
} from "docx";
import { saveAs } from "file-saver";

export type SectionKey = "summary" | "skills" | "experience" | "education";

export interface DocxResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: Array<{ category: string; item: string }>;
  experiences: Array<{
    company: string;
    role: string;
    location?: string;
    dates: string;
    achievements: string[];
  }>;
  educations: Array<{ school: string; date: string; degree?: string }>;
}

const ACCENT = "01A4C3";
const HEADING_COLOR = "01A4C3";

function heading(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    border: {
      bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 6, space: 4 },
    },
    children: [
      new TextRun({ text, bold: true, color: HEADING_COLOR, size: 26 }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 22 })],
  });
}

function sectionBody(
  key: SectionKey,
  data: DocxResumeData,
): Paragraph[] {
  switch (key) {
    case "summary":
      return [
        new Paragraph({
          spacing: { after: 120 },
          children: [new TextRun({ text: data.summary, size: 22 })],
        }),
      ];

    case "skills":
      return data.skills.flatMap((skill) => [
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: `${skill.category}: `, bold: true, size: 22 }),
            new TextRun({ text: skill.item, size: 22 }),
          ],
        }),
      ]);

    case "experience":
      return data.experiences.flatMap((exp) => {
        const headerRuns: TextRun[] = [
          new TextRun({ text: exp.role, bold: true, size: 24 }),
          new TextRun({ text: " — ", size: 24 }),
          new TextRun({ text: exp.company, size: 24 }),
        ];
        if (exp.location) {
          headerRuns.push(new TextRun({ text: ` (${exp.location})`, size: 22, italics: true }));
        }
        const paragraphs: Paragraph[] = [
          new Paragraph({
            spacing: { before: 160, after: 40 },
            children: headerRuns,
          }),
          new Paragraph({
            spacing: { after: 60 },
            children: [new TextRun({ text: exp.dates, italics: true, size: 20, color: "555555" })],
          }),
        ];
        for (const achievement of exp.achievements) {
          paragraphs.push(bullet(achievement));
        }
        return paragraphs;
      });

    case "education":
      return data.educations.flatMap((edu) => {
        const runs: TextRun[] = [
          new TextRun({ text: edu.school, bold: true, size: 24 }),
        ];
        if (edu.degree) {
          runs.push(new TextRun({ text: ` — ${edu.degree}`, size: 22 }));
        }
        return [
          new Paragraph({
            spacing: { after: 60 },
            children: runs,
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [new TextRun({ text: edu.date, italics: true, size: 20, color: "555555" })],
          }),
        ];
      });
  }
}

export function buildDocx(
  data: DocxResumeData,
  sectionOrder: SectionKey[],
): Document {
  const headerParagraphs: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [new TextRun({ text: data.name, bold: true, size: 36, color: ACCENT })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [new TextRun({ text: data.phone, size: 20 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      border: {
        bottom: { color: ACCENT, style: BorderStyle.SINGLE, size: 8, space: 6 },
      },
      children: [new TextRun({ text: data.email, size: 20 })],
    }),
  ];

  const bodyParagraphs: Paragraph[] = sectionOrder.flatMap((key) => {
    const labels: Record<SectionKey, string> = {
      summary: "PROFESSIONAL SUMMARY",
      skills: "TECHNICAL SKILLS",
      experience: "WORK EXPERIENCE",
      education: "EDUCATION",
    };
    return [heading(labels[key]), ...sectionBody(key, data)];
  });

  const sectionOptions: ISectionOptions = {
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4 in twips
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }, // ~2cm
      },
    },
    children: [...headerParagraphs, ...bodyParagraphs],
  };

  return new Document({
    sections: [sectionOptions],
  });
}

export async function downloadDocx(
  data: DocxResumeData,
  sectionOrder: SectionKey[],
): Promise<void> {
  const doc = buildDocx(data, sectionOrder);
  const blob = await Packer.toBlob(doc);
  saveAs(blob, "sample-resume.docx");
}
