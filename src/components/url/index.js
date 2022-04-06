import { useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

import { useQuery, useMutation, gql } from "@apollo/client";

// const GET_ALL_LINKS = gql`
//   query GetAllLinks {
//     allLinks {
//       id
//       url
//       slug
//     }
//   }
// `;

const mockData = {
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

const CREATE_LINK = gql`
  mutation CreateLink($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
      id
    }
  }
`;

const Url = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  // const { loading, error, data } = useQuery(GET_ALL_LINKS);
  const [
    createLink,
    { data: mutationData, loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_LINK);

  // if (loading) return <p>loading...</p>;
  // if (error) return <p>error</p>;

  const reset = () => {
    setUrl("");
    setSlug("");
  };

  const handleShortUrl = async () => {
    // call mutation hook and create link
    const res = await createLink({ variables: { url, slug } });
    console.log("mutationLoading", mutationLoading);
    console.log("mutationData", mutationData);
    console.log("mutationError", mutationError);

    console.log("res", res);

    reset();
  };

  return (
    <Container>
      <Box sx={{ background: "#263849", p: 5 }}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={12} md={8}>
            <TextField
              sx={{ mr: 1, background: "#fff", height: "50px" }}
              label=""
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              variant="outlined"
              placeholder="Make your links shorter"
            />
            <TextField
              sx={{ background: "#fff", height: "50px" }}
              label=""
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              variant="outlined"
              placeholder="Custom slug"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Button
              sx={{ height: "50px" }}
              variant="contained"
              onClick={handleShortUrl}
            >
              Shorten URL
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <div className="App">
          {mockData.allLinks.map((link) => {
            return <div key={link.id}>{link.url}</div>;
          })}
        </div>
      </Box>
    </Container>
  );
};

export default Url;
