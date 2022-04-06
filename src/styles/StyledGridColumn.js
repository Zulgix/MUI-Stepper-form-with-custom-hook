import { Grid } from "@mui/material";
import { styled } from "@mui/material";

export const StyledGridColumn = styled(Grid, {
  name: "StyledGridColumn",
})({
  display: "grid",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  borderRadius: "5px",
});

export const StyledInputsContainer = styled(Grid, {
  name: "StyledInputsContainer",
})({
  display: "block",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
  borderRadius: "5px",
});
