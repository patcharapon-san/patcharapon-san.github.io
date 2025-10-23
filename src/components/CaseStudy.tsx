"use client";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { colorCombos } from "@/utils/colors";

export type CaseStudyProps = {
  projectName: string;
  objective: string;
  description: string;
  technologies: readonly string[];
  challenges: readonly string[];
  solution: string;
  results: readonly string[];
  feedback?: string;
};

export default function CaseStudy({
  projectName,
  objective,
  description,
  technologies,
  challenges,
  solution,
  results,
  feedback,
}: CaseStudyProps) {
  return (
    <Paper sx={{ p: 3, border: `1px solid ${colorCombos.border.light}`, bgcolor: colorCombos.background.primary }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: colorCombos.text.title, mb: 2 }}>
        {projectName}
      </Typography>

      <Section title="Project Objective / Purpose" body={objective} />
      <Section title="Project Description" body={description} />

      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colorCombos.text.title, mt: 2 }}>
        Technologies Used
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {technologies.map((t) => (
          <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: colorCombos.border.light, color: colorCombos.text.secondary_1 }} />
        ))}
      </Stack>

      <ListSection title="Major Issues / Pain Points / Challenges" items={challenges} />
      <Section title="Solution Provided" body={solution} />
      <ListSection title="Results" items={results} />

      {feedback && <Section title="Feedback" body={feedback} />}
    </Paper>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colorCombos.text.title }}>{title}</Typography>
      <Typography variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>{body}</Typography>
    </Box>
  );
}

function ListSection({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colorCombos.text.title }}>{title}</Typography>
      <Box component="ul" sx={{ m: 0, pl: 3 }}>
        {items.map((i, idx) => (
          <Typography key={idx} component="li" variant="body2" sx={{ color: colorCombos.text.secondary_1 }}>
            {i}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
