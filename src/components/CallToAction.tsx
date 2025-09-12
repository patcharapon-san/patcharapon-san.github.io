
"use client";
import { Box, Typography, Button, Container, Paper, Alert, TextField } from "@mui/material";
import { useState } from "react";
import { colorCombos } from "../utils/colors";

export default function CallToAction({ title, subtitle, responseMessage: response_message }: { title?: string, subtitle?: string, responseMessage?: string }) {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Implement real email sending or integration
  };
  return (
    <Box sx={{ py: 8, bgcolor: colorCombos.background.section }}>
      <Container>
        <Typography variant="h4" align="center" sx={{ color: colorCombos.button.primary.text, fontWeight: 700, mb: 3 }}>
          {title}
        </Typography>
        <Typography align="center" sx={{ mb: 4, color: colorCombos.text.light }}>
          {subtitle}
        </Typography>
        <Paper elevation={3} sx={{ p: 4, width: "70%", margin: "0 auto" }}>
          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {response_message}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "50%", mb: 1, pr: 1 }}
              required
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              sx={{ width: "50%", mb: 1, pl: 1 }}
              required
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              required
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              margin="normal"
              multiline
              minRows={6}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: colorCombos.button.primary.background,
                color: colorCombos.button.primary.text,
                "&:hover": {
                  bgcolor: colorCombos.button.primary.hover
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
