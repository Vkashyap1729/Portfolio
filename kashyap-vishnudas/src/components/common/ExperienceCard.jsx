import { Stack,Box, Typography } from "@mui/material";
import pic from '../../assets/images/download_image_1697988860383.png'
const ExperienceCard = ({imgUrl,name,role,experience}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        maxWidth: "500px",
        width: "25%",
        minWidth: "300px",
        borderRadius: "10px",
        border: "1px solid #F4F6F8",
        background: "#FFF",
        boxShadow: "10px 10px 32px 0px rgba(22, 22, 22, 0.04)",
        p: "5px",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "4px",
        }}
      >
        <img
          src={pic}
          alt="Company Logo"
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        />
      </Box>
      <Stack 
        sx={{
            p : '0 20px 0 10px',
        }}
      >
        <Typography>{name}</Typography>
        <Typography>{role}</Typography>
        <Typography>{experience}</Typography>
      </Stack>
    </Stack>
  );
}
ExperienceCard.defaultProps = {
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pKLF0QSR2f8EZy5qhmmXCEJuP5Y9nLHyfg&usqp=CAU",
    name : 'Google',
    role : 'Software Development Enginner',
    experience : '2y 10m',
};
export default ExperienceCard