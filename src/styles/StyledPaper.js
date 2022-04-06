import { Paper } from "@mui/material";
import { styled } from "@mui/material";

export const StyledPaper = styled(Paper, {
  name: "StyledPaper",
  slot: "Wrapper",
})({
  width: "50%",
  height: "auto",
  padding: "10px",
  border: "solid",
  borderRadius: "60px",
  marginTop: "15px",
  marginBottom: "30px",
  background: "#DBE2EF",
});
