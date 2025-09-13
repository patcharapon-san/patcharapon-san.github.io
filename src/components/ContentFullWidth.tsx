import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";

export default function ContentFullWidth({
  image,
  title,
  text,
  text2,
  imagePosition = "above"
}: {
  image?: string[];
  title?: string;
  text?: string;
  text2?: string;
  imagePosition?: "above" | "below" | "None";
}) {

  const imageList = (
    <>
      {/* Image Column - Order changes based on imagePosition */}
      <GridLegacy
        item
        xs={12}
        md={6}
        sx={{ display: 'contents' }}
      >
        {image && (image.map((imgSrc, index) => (
          <Avatar
            key={index}
            src={imgSrc}
            alt={`Image ${index + 1}`}
            sx={{
              width: 220,
              height: 220,
              mx: "auto",
              mb: { xs: 3, md: 0 },
              border: "3px solid var(--primary-200)", // Adding border with primary color
              boxShadow: "0 4px 20px var(--neutral-300)" // Shadow using neutral color
            }}
          />
        )))}
      </GridLegacy>
    </>
  );


  const textColumn = (
    <>
      {/* Text Column - Order changes based on imagePosition */}
      <GridLegacy
        item
        xs={12}
        md={6}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "var(--foreground)", // Using foreground color
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: 0,
              width: 60,
              height: 3,
              backgroundColor: "var(--primary-500)", // Accent underline
              borderRadius: 2
            }
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: "var(--neutral-600)", // Using neutral color instead of text.secondary
            lineHeight: 1.6
          }}
        >
          {text}
        </Typography>
        {text2 && (
          <Typography
            sx={{
              color: "var(--neutral-500)", // Slightly lighter for second text
              lineHeight: 1.6,
              fontStyle: "italic"
            }}
          >
            {text2}
          </Typography>
        )}
      </GridLegacy>
    </>
  );

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "var(--background)", // Using CSS custom property
        borderTop: "1px solid var(--neutral-200)"
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">

          {imagePosition === "None" ? (
            <>
              {textColumn}
            </>
          ) : imagePosition === "above" ? (
            <>
              {imageList}
              {textColumn}
            </>
          ) : (
            <>
              {textColumn}
              {imageList}
            </>
          )}

        </Grid>
      </Container>
    </Box>
  );
}