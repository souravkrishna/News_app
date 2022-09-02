import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetSources,
  onGetNews,
  onSelectHeadline,
  onRemoveFav,
} from "../actions/actions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

function Sources() {
  const dispatch = useDispatch();
  const Source = useSelector((state) => state.Source);
  const Fav = useSelector((state) => state.Fav);
  const { loading, error, source } = Source;
  const { fav } = Fav;

  useEffect(() => {
    dispatch(onGetSources());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        // <div style={{ color: "white" }}>Something went wrong...</div>
        <div
          style={{
            backgroundColor: "#171717",
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
        >
          <div>
            <Accordion sx={{ backgroundColor: "#171717" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#DA0037" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography color={"#DA0037"} variant="h3">
                  Sources
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  {source.map((source, i) => {
                    return (
                      <Box
                        id={source.id}
                        key={i}
                        sx={{
                          color: "#EDEDED",
                          borderRadius: 2,
                          backgroundColor: "#444444",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          ":hover": {
                            backgroundColor: "#DA0037",
                          },
                        }}
                        onClick={() =>
                          dispatch(onGetNews(source.id, source.name))
                        }
                      >
                        <Typography pl="20px">{source.name}</Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#171717" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#DA0037" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography color={"#DA0037"} variant="h6">
                  Favourites {fav.length !== 0 ? `(${fav.length})` : null}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  {fav.map((item, i) => {
                    return (
                      <Box
                        onClick={() => dispatch(onSelectHeadline(item))}
                        key={i}
                        sx={{
                          color: "#EDEDED",
                          borderRadius: 2,
                          backgroundColor: "#444444",
                          height: "100%",
                          alignItems: "center",
                          cursor: "pointer",
                          ":hover": {
                            backgroundColor: "#DA0037",
                          },
                        }}
                      >
                        <Typography
                          pl="20px"
                          sx={{ marginBottom: "15px", marginTop: "15px" }}
                        >
                          {item.title}
                        </Typography>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            onClick={() => dispatch(onRemoveFav(item))}
                            variant="contained"
                            sx={{
                              height: "80%",
                              marginBottom: 2,
                              backgroundColor: "#171717",
                              ":hover": { backgroundColor: "#444444" },
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      </Box>
                    );
                  })}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default Sources;
