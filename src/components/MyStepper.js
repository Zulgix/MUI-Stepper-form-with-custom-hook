import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  StepContent,
} from "@mui/material";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

function MyStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => {
    if (activeStep < 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const previousStep = () => {
    if (activeStep !== -1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Grid container direction="column">
      <form>
        <Stepper activeStep={activeStep} orientation="vertical"> 
          <Step key={1}>
            <Grid item>
              <StepLabel>First</StepLabel>
              <StepContent>
                <FirstStep nextStep={nextStep} />
              </StepContent>
              <Grid container></Grid>
            </Grid>
          </Step>
          <Step key={2}>
            <Grid item>
              <StepLabel>Second</StepLabel>
              <StepContent>
                <SecondStep nextStep={nextStep} />
              </StepContent>
            </Grid>
          </Step>
          <Step key={3}>
            <Grid item>
              <StepLabel>Third</StepLabel>
              <StepContent>
                <ThirdStep />
              </StepContent>
            </Grid>
          </Step>
        </Stepper>

        <Grid container item justifyContent="center">
          <Grid item>
            <Button variant="outlined" onClick={() => nextStep()}>
              Next Step
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => previousStep}>
              Prev Step
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default MyStepper;
