import { Box, Typography } from "@mui/material";
import toolsPhoto from "../../../assets/tools.png";

const Tool = () => {
  return (
    <Box sx={{ my: 5 }}>
      <Typography sx={{ mb: 5 }} align="center" variant="h6">
        Rebrandly connects to the tools you already use
      </Typography>
      <img src={toolsPhoto} alt="Rebrandly tools and integrations" />
      <Typography sx={{ mt: 5 }} align="center">
        <a href="/#"> Discover 100+ integrations</a>
      </Typography>
    </Box>
  );
};

export default Tool;
