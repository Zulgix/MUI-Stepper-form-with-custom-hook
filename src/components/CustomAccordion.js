import React from "react";
import Accordion from "@mui/material/Accordion";
import {
  AccordionDetails,
  AccordionSummary,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FirstInputs from "./globals/FirstInputs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomAccordion(props) {
  return (
    <div>
      <Grid container direction="column" justifyContent="center">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{props.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {FirstInputs.map((input) => (
              <Grid item key={input.id} sx={{ p: "10px" }}>
                <TextField
                  variant="outlined"
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                ></TextField>
              </Grid>
            ))}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

export default CustomAccordion;
