import { Box, Typography } from "@mui/material"
const SkillChip = ({ fill, skillName }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100px",
        maxWidth: "150px",
        height : "40px",
        borderRadius: "5px",
        bgcolor: `${fill}`,
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Typography>{skillName}</Typography>
    </Box>
  );
};
SkillChip.defaultProps = {
  skillName: "Node JS",
  fill: "#B5C0D0",
};
export default SkillChip