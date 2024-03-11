import { Stack, Typography,Box} from "@mui/material"
const ProjectCard = ({ imgUrl, title, description, handelClick }) => {
  return (
    <Stack
      sx={{
        maxWidth: "244px",
        width: "25%",
        minWidth: "200px",
        borderRadius: "10px",
        border: "1px solid #F4F6F8",
        background: "#FFF",
        boxShadow: "10px 10px 32px 0px rgba(22, 22, 22, 0.04)",
        ":hover": {
          cursor: "pointer",
        },
        onClick: { handelClick },
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
          boxShadow: "0px -1px 0px 0px #E9EAF0 inset",
          width: "100%",
          aspectRatio: "244/183",
        }}
      ></Box>
      <Box
        sx={{
          p: "10px 20px 10px 20px",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Stack>
  );
};
ProjectCard.defaultProps = {
  imgUrl:
    "https://pmstudycircle.com/wp-content/uploads/2021/06/project.jpg.webp",
  title: "Project Name",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sunt.",
};
export default ProjectCard