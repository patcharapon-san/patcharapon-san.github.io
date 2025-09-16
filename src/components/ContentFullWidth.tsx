import { Box, Typography, Grid, Avatar, Container } from "@mui/material";
import GridLegacy from "@mui/material/GridLegacy";
import { colorCombos } from "@/utils/colors";

export default function ContentFullWidth({
  image,
  title,
  text,
  text2,
  imagePosition = "above",
  sx
}: {
  image?: string[];
  title?: string;
  text?: string;
  text2?: string;
  sx?: object;
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
              borderRadius: 0,
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
            color: colorCombos.text.primary,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: 0,
              width: 60,
              height: 3,
              backgroundColor: colorCombos.icon.primary,
              borderRadius: 2
            }
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: colorCombos.text.secondary_1,
            lineHeight: 1.6
          }}
          dangerouslySetInnerHTML={{ __html: text || '' }}
        />
        {text2 && (
          <Typography
            sx={{
              color: colorCombos.text.muted,
              lineHeight: 1.6,
              fontStyle: "italic"
            }}
            dangerouslySetInnerHTML={{ __html: text2 }}
          />
        )}
      </GridLegacy>
    </>
  );

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: colorCombos.background.primary,
        borderTop: `1px solid ${colorCombos.border.light}`,
        ...sx
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