import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FirstInputs from "./globals/FirstInputs";
import { formActions } from "../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";

function FirstStep({ nextStep }) {
  const values = useSelector((state) => state.form.formValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(formActions.setFormValues({ ...values, [name]: value }));
  };

  return (
    <div>
      <Grid container direction="column" justifyContent="center">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Personal Info</Typography>
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
                  onChange={handleChange}
                ></TextField>
              </Grid>
            ))}
            <Button variant="outlined" onClick={nextStep}>
              Next
            </Button>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

export default FirstStep;
