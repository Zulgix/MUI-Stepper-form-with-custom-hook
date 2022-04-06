import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecondInputs from "./globals/SecondInputs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { formActions } from "../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";

const Pets = [
  {
    value: "Cat",
  },
  {
    value: "Dog",
  },
  {
    value: "Horse",
  },
];

function SecondStep({ nextStep }) {
  const [pets, setPets] = React.useState("EUR");
  const dispatch = useDispatch();
  const petsInfo = useSelector((state) => state.form.petInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(formActions.setPetsInfo({ ...petsInfo, [name]: value }));
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
            <Typography>Pets Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {SecondInputs.map((input) => (
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
            <Grid item>
              <Select
                labelId="pets"
                id="pets"
                value={pets}
                label="pets"
                onChange={handleChange}
              >
                <MenuItem value="dog">dog</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="horse">Horse</MenuItem>
              </Select>
            </Grid>
            <Button variant="outlined" onClick={nextStep}>
              Next
            </Button>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

export default SecondStep;
