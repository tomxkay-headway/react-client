import { useState } from "react";
import { Box, Button, Grid, TextField, Stack, Typography } from "@mui/material";

import { useQuery, useMutation, gql } from "@apollo/client";

const GET_ALL_LINKS = gql`
  query QueryLinks {
    allLinks {
      id
      url
      slug
    }
  }
`;

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

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData
  } = useQuery(GET_ALL_LINKS);

  const [
    createLink,
    { data: mutationData, loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_LINK);

  const reset = () => {
    setUrl("");
    setSlug("");
  };

  const handleShortUrl = async () => {
    // call mutation hook and create link
    await createLink({ variables: { url, slug } });

    console.log("mutationLoading", mutationLoading);
    console.log("mutationData", mutationData);
    console.log("mutationError", mutationError);

    reset();
  };

  return (
    <>
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
        {queryLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <div>
            {queryData.allLinks.map((link) => {
              return (
                <Grid container key={link.id}>
                  <Grid item xs={6}>
                    <Box>
                      <Typography align="right">{link.url}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack direction="row">
                      <Box
                        component="span"
                        sx={{ ml: 3, width: "50px" }}
                      >{`-->`}</Box>
                      <Typography>{`https://hdwy.link/${link.slug}`}</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        )}
      </Box>
    </>
  );
};

export default Url;
