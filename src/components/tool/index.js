import { Box, Typography } from "@mui/material";
import toolsPhoto from "../../../assets/tools.png";

const Tool = () => {
  return (
    <Box>
      <img src={toolsPhoto} alt="Rebrandly tools and integrations" />
      <Typography align="center">
        <a href="/#"> Discover 100+ integrations</a>
      </Typography>
    </Box>
  );
};

export default Tool;
