// Stoplight.tsx
import { Circle } from "@mui/icons-material";
import { Stack } from "@mui/material";

type StoplightColor = "red" | "yellow" | "green" | "off";
type Orientation = "vertical" | "horizontal";

const Stoplight = ({
   color,
   orientation = "vertical",
}: {
   color: StoplightColor;
   orientation?: Orientation;
}) => {
   return (
      <Stack
         direction={orientation === "vertical" ? "column" : "row"}
         spacing={1}
         sx={{ p: 1, bgcolor: "black", borderRadius: 1, boxShadow: 2 }}
      >
         <Circle sx={{ color: "red", opacity: color === "red" ? 1 : 0.2 }} />
         <Circle sx={{ color: "yellow", opacity: color === "yellow" ? 1 : 0.2 }} />
         <Circle sx={{ color: "green", opacity: color === "green" ? 1 : 0.2 }} />
      </Stack>
   );
};

export default Stoplight;
