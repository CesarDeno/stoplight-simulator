import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Stoplight from "./components/Stoplight";

//Map de tiempos segun estado
const phaseDurations: Record<string, number> = {
   NS_GREEN: 15,
   NS_YELLOW: 4,
   EW_GREEN: 15,
   EW_YELLOW: 4,
};

//Estilos de las calles
const streets = [
   // Cruce central
   { top: "50%", left: "50%", width: 300, height: 300, translate: "-50%, -50%" },
   // Calles verticales
   { top: 0, left: "40%", width: 120, height: "100%", translate: "-50%, 0" },
   { top: 0, left: "60%", width: 120, height: "100%", translate: "-50%, 0" },
   // Calles horizontales
   { top: "40%", left: 0, width: "100%", height: 120, translate: "0, -50%" },
   { top: "60%", left: 0, width: "100%", height: 120, translate: "0, -50%" },
];

const App = () => {
   const [phase, setPhase] = useState<"NS_GREEN" | "NS_YELLOW" | "EW_GREEN" | "EW_YELLOW">("NS_GREEN");
   const [secondsLeft, setSecondsLeft] = useState(phaseDurations["NS_GREEN"]);

   //useEffect de manejo de timer
   useEffect(() => {
      setSecondsLeft(phaseDurations[phase]);

      const countdown = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);

      const timer = setTimeout(() => {
         if (phase === "NS_GREEN") setPhase("NS_YELLOW");
         else if (phase === "NS_YELLOW") setPhase("EW_GREEN");
         else if (phase === "EW_GREEN") setPhase("EW_YELLOW");
         else if (phase === "EW_YELLOW") setPhase("NS_GREEN");
      }, phaseDurations[phase] * 1000);

      return () => {
         clearInterval(countdown);
         clearTimeout(timer);
      };
   }, [phase]);

   //Funcion para obtener el color segun la fase
   const getLightFor = (direction: "NS" | "EW") => {
      if (direction === "NS") {
         if (phase === "NS_GREEN") return "green";
         if (phase === "NS_YELLOW") return "yellow";
         return "red";
      } else {
         if (phase === "EW_GREEN") return "green";
         if (phase === "EW_YELLOW") return "yellow";
         return "red";
      }
   };

   //Componentes visuales
   return (
      <Box sx={{ position: "relative", width: "100%", height: "100vh", bgcolor: "#424242" }}>
         {/* Timer visual */}
         <Typography sx={{ position: "absolute", top: 10, right: 10, color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            {secondsLeft}s
         </Typography>

         {streets.map((s, i) => (
            <Box
               key={i}
               sx={{
                  position: "absolute",
                  top: s.top,
                  left: s.left,
                  width: s.width,
                  height: s.height,
                  bgcolor: "#2e2e2e",
                  transform: `translate(${s.translate})`,
               }}
            />
         ))}

         {/* Semáforos NS (arriba y abajo) */}
         <Box sx={{ position: "absolute", top: 10, left: "60%", transform: "translateX(-50%)" }}>
            <Stoplight color={getLightFor("NS")} orientation="horizontal" />
         </Box>
         <Box sx={{ position: "absolute", bottom: 10, left: "40%", transform: "translateX(-50%)" }}>
            <Stoplight color={getLightFor("NS")} orientation="horizontal" />
         </Box>

         {/* Semáforos EW (izquierda y derecha) */}
         <Box sx={{ position: "absolute", left: 10, top: "40%", transform: "translateY(-50%)" }}>
            <Stoplight color={getLightFor("EW")} />
         </Box>
         <Box sx={{ position: "absolute", right: 10, top: "60%", transform: "translateY(-50%)" }}>
            <Stoplight color={getLightFor("EW")} />
         </Box>
      </Box>
   );
};

export default App;
