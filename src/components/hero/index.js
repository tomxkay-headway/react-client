import { Box, Button, Grid, Typography } from "@mui/material";
import personPhoto from "../../../assets/person.png";

const Hero = () => {
  return (
    <Box sx={{ height: "80vh" }}>
      <Grid container>
        <Grid item sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ color: "#212732" }}>
                Your Bran on Your Links
              </Typography>
              <Typography variant="body2" sx={{ color: "#595d66" }}>
                Rebrandly is the industry-leading management platform to brand,
                track and share short URLs using a custom domain name
              </Typography>
              <Button variant="contained">Sign up free</Button>
              <Button variant="outlined">Request a demo</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <img src={personPhoto} alt="Guy with glasses looking to his left" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
