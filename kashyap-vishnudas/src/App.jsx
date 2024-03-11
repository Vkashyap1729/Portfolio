import ExperienceCard from "./components/common/ExperienceCard";
import ProjectCard from "./components/common/ProjectCard";
import ResponsiveNavBar from "./components/common/ResponsiveNavBar";
import SkillChip from "./components/common/SkillChip";
import { Stack, Box, Typography } from "@mui/material";
import videoFile from "./assets/images/testing.mp4";
import { useState } from "react";
import NavBarContent from "./components/common/NavBarContent";
function App() {
  return (
    <>
      <NavBarContent />
      {/* <ResponsiveNavBar/> */}
      {/* <ProjectCard /> */}
      {/* <Stack direction={"row"} spacing={10}>
        <SkillChip />
        <SkillChip />
        <SkillChip />
        <SkillChip />
        <SkillChip />
        <SkillChip />
        <SkillChip />
      </Stack> */}
      {/* <ExperienceCard />
      <Box
        sx={{
          width: "500px",
          height: "400px",
        }}
      >
        <video controls style={{ width: "100%", height: "100%" }}>
          <source src={videoFile} type="video/mp4" />
        </video>
      </Box> */}
    </>
  );
}

export default App;
