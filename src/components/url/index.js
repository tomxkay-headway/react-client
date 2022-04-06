import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";

// import { useQuery, gql } from "@apollo/client";

// const GET_ALL_LINKS = gql`
//   query GetAllLinks {
//     allLinks {
//       id
//       url
//       slug
//     }
//   }
// `;

const data = {
  allLinks: [
    {
      id: 1,
      url: "test url 1",
      slug: "test slug 1"
    },
    {
      id: 2,
      url: "test url 2",
      slug: "test slug 2"
    }
  ]
};

const Url = () => {
  // const { loading, error, data } = useQuery(GET_ALL_LINKS);

  // if (loading) return <p>loading...</p>;
  // if (error) return <p>error</p>;

  return (
    <Container>
      <Box sx={{ background: "#263849", p: 5 }}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={12} md={8}>
            <TextField
              sx={{ mr: 1, background: "#fff", height: "50px" }}
              label=""
              variant="outlined"
              placeholder="Make your links shorter"
            />
            <TextField
              sx={{ background: "#fff", height: "50px" }}
              label=""
              variant="outlined"
              placeholder="Custom slug"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Button sx={{ height: "50px" }} variant="contained">
              Shorten URL
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <div className="App">
          {data.allLinks.map((link) => {
            return <div key={link.id}>{link.url}</div>;
          })}
        </div>
      </Box>
    </Container>
  );
};

export default Url;
