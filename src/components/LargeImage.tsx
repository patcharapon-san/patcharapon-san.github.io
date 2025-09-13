import { Box } from "@mui/material";
import Image from "next/image";
import { colorCombos } from "../utils/colors";

type LargeImageProps = {
    src: string;
    alt?: string;
    maxWidth?: string | number;
    maxHeight?: string | number;
    borderRadius?: string | number;
};

export default function LargeImage({
    src,
    alt = "Large display",
    maxWidth = "100%",
    maxHeight = "100%",
    borderRadius = 16,
}: LargeImageProps) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 8,
                bgcolor: colorCombos.gallery.background
            }}
        >
            <Image
                width={1200}
                height={600}
                layout="responsive"
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth,
                    maxHeight,
                    borderRadius,
                    boxShadow: `0 6px 32px ${colorCombos.card.shadow}`,
                }}
            />
        </Box>
    );
}