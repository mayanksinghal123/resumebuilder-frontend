// src/components/ResumeGenerator.tsx

import { useState } from "react";
import {
  Container,
  Paper,
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface ResumeData {
  name: string;
  title1: string;
  title2: string;
  summary: string;
  email: string;
  skills: Array<{ category: string; item: string }>;
  experiences: Array<{
    company: string;
    role: string;
    location?: string;
    dates?: string;
    description?: string;
  }>;
  projects: Array<{
    title: string;
    date?: string;
    technology?: string[];
    description?: string[];
  }>;
  educations: Array<{
    school: string;
    date?: string;
  }>;
}

const A4Paper = styled(Paper)(({ theme }) => ({
  width: "210mm",
  minHeight: "297mm",
  margin: "20px auto",
  padding: "20px",
  boxShadow: theme.shadows[3],
  backgroundColor: "#fff",
  position: "relative",
  "@media print": {
    margin: 0,
    boxShadow: "none",
  },
}));

const EditableText = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:hover .edit-icon": {
    opacity: 1,
  },
  ".edit-icon": {
    opacity: 0,
    transition: "opacity 0.2s",
    marginLeft: "8px",
  },
}));

const ResumeGenerator = () => {
  const [resume, setResume] = useState<ResumeData>({
    name: "Mayank Gupta",
    title1: "Frontend Developer | React Js | TypeScript | Node Js | JavaScript",
    title2: "9015967996 | mayank@example.com | linkedin.com/in/mayankgupta | Faridabad, Haryana",
    summary:
      "Results-driven Staff Frontend Engineer with 9.5+ years of experience (7.5+ years in React.js) building scalable, high-performance web applications.",
    email: "mayank@example.com",
    skills: [
      { category: "Frontend", item: "React, JavaScript, TypeScript, CSS, HTML" },
      { category: "State Management", item: "Redux, Zustand, Context API, React Query" },
    ],
    experiences: [
      {
        company: "Tech Company",
        role: "Software Engineer",
        location: "San Francisco, CA",
        dates: "Jan 2020 - Present",
        description: "Working on developing and maintaining web applications using React and Node.js.",
      },
    ],
    projects: [],
    educations: [
      {
        school: "University Name",
        date: "2016 - 2020",
      },
    ],
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"skill" | "experience" | "education" | null>(null);
  const [newEntry, setNewEntry] = useState({});

  const handleFieldEdit = (field: keyof ResumeData) => {
    setEditingField(field);
    setEditValue(String(resume[field]));
  };

  const handleSaveEdit = () => {
    if (editingField && editingField in resume) {
      setResume((prev) => ({
        ...prev,
        [editingField]: editValue,
      }));
      setEditingField(null);
    }
  };

  const handleAddEntry = (type: "skill" | "experience" | "education") => {
    setDialogType(type);
    setNewEntry({});
    setDialogOpen(true);
  };

  const handleDialogSave = () => {
    if (dialogType === "skill" && "category" in newEntry && "item" in newEntry) {
      setResume((prev) => ({
        ...prev,
        skills: [...prev.skills, newEntry as any],
      }));
    } else if (dialogType === "experience") {
      setResume((prev) => ({
        ...prev,
        experiences: [...prev.experiences, newEntry as any],
      }));
    } else if (dialogType === "education") {
      setResume((prev) => ({
        ...prev,
        educations: [...prev.educations, newEntry as any],
      }));
    }
    setDialogOpen(false);
    setNewEntry({});
  };

  const handleDeleteSkill = (index: number) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleDeleteExperience = (index: number) => {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  const handleDeleteEducation = (index: number) => {
    setResume((prev) => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index),
    }));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <A4Paper>
          {/* Header Section */}
          <Box sx={{ mb: 3, textAlign: "center", pb: 2, borderBottom: "2px solid #333" }}>
            <EditableText
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}
            >
              {editingField === "name" ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={handleSaveEdit}
                  autoFocus
                />
              ) : (
                <>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", cursor: "pointer" }}
                    onClick={() => handleFieldEdit("name")}
                  >
                    {resume.name}
                  </Typography>
                  <EditIcon className="edit-icon" sx={{ fontSize: 20 }} />
                </>
              )}
            </EditableText>

            <EditableText
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 0.5 }}
            >
              {editingField === "title1" ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={handleSaveEdit}
                  autoFocus
                />
              ) : (
                <>
                  <Typography
                    variant="caption"
                    sx={{ cursor: "pointer", fontSize: "0.85rem" }}
                    onClick={() => handleFieldEdit("title1")}
                  >
                    {resume.title1}
                  </Typography>
                  <EditIcon className="edit-icon" sx={{ fontSize: 16 }} />
                </>
              )}
            </EditableText>

            <EditableText sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {editingField === "title2" ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={handleSaveEdit}
                  autoFocus
                />
              ) : (
                <>
                  <Typography
                    variant="caption"
                    sx={{ cursor: "pointer", fontSize: "0.75rem" }}
                    onClick={() => handleFieldEdit("title2")}
                  >
                    {resume.title2}
                  </Typography>
                  <EditIcon className="edit-icon" sx={{ fontSize: 16 }} />
                </>
              )}
            </EditableText>
          </Box>

          {/* Summary Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              SUMMARY
            </Typography>
            <EditableText>
              {editingField === "summary" ? (
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={handleSaveEdit}
                  autoFocus
                />
              ) : (
                <>
                  <Typography
                    variant="body2"
                    sx={{ cursor: "pointer", lineHeight: 1.6 }}
                    onClick={() => handleFieldEdit("summary")}
                  >
                    {resume.summary}
                  </Typography>
                  <EditIcon className="edit-icon" sx={{ fontSize: 16 }} />
                </>
              )}
            </EditableText>
          </Box>

          {/* Skills Section */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                SKILLS
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleAddEntry("skill")}
                sx={{ bgcolor: "#f0f0f0" }}
              >
                <AddIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {resume.skills.map((skill, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: "600" }}>
                      {skill.category}:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      {skill.item}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteSkill(idx)}
                    sx={{ color: "error.main" }}
                  >
                    <DeleteIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                EXPERIENCE
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleAddEntry("experience")}
                sx={{ bgcolor: "#f0f0f0" }}
              >
                <AddIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {resume.experiences.map((exp, idx) => (
                <Box
                  key={idx}
                  sx={{
                    pb: 1,
                    borderBottom: "1px solid #ddd",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" sx={{ fontWeight: "600" }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#666" }}>
                        {exp.dates}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: "#999" }}>
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5, color: "#444" }}>
                      {exp.description}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteExperience(idx)}
                    sx={{ color: "error.main" }}
                  >
                    <DeleteIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Education Section */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                EDUCATION
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleAddEntry("education")}
                sx={{ bgcolor: "#f0f0f0" }}
              >
                <AddIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {resume.educations.map((edu, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="body2" sx={{ fontWeight: "600" }}>
                        {edu.school}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#666" }}>
                        {edu.date}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteEducation(idx)}
                    sx={{ color: "error.main" }}
                  >
                    <DeleteIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
        </A4Paper>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
          <Button variant="contained" onClick={() => window.print()}>
            Print Resume
          </Button>
          <Button variant="outlined">Download PDF</Button>
        </Box>
      </Box>

      {/* Add Entry Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>
          Add {dialogType === "skill" ? "Skill" : dialogType === "experience" ? "Experience" : "Education"}
        </DialogTitle>
        <DialogContent sx={{ minWidth: "400px" }}>
          {dialogType === "skill" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              <TextField
                label="Category"
                value={(newEntry as any).category || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, category: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Skills"
                value={(newEntry as any).item || ""}
                onChange={(e) => setNewEntry({ ...newEntry, item: e.target.value })}
                fullWidth
              />
            </Box>
          )}
          {dialogType === "experience" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              <TextField
                label="Company"
                value={(newEntry as any).company || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, company: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Role"
                value={(newEntry as any).role || ""}
                onChange={(e) => setNewEntry({ ...newEntry, role: e.target.value })}
                fullWidth
              />
              <TextField
                label="Location"
                value={(newEntry as any).location || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, location: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Dates"
                value={(newEntry as any).dates || ""}
                onChange={(e) => setNewEntry({ ...newEntry, dates: e.target.value })}
                fullWidth
              />
              <TextField
                label="Description"
                value={(newEntry as any).description || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, description: e.target.value })
                }
                fullWidth
                multiline
                rows={3}
              />
            </Box>
          )}
          {dialogType === "education" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              <TextField
                label="School/University"
                value={(newEntry as any).school || ""}
                onChange={(e) =>
                  setNewEntry({ ...newEntry, school: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Date"
                value={(newEntry as any).date || ""}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                fullWidth
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDialogSave} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ResumeGenerator;
