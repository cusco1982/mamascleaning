'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Let us do the cleaning!',
    imgPath:
      '/photos/dirtyFridge.jpg',
  },
  {
    label: 'Make your floors look brand new!',
    imgPath:
      '/photos/cleanFridge.jpg',
  },
  {
    label: 'Let us do the cleaning!',
    imgPath:
      '/photos/dirtyVent.jpg',

  },
  {
    label: 'Let us do the cleaning!',
    imgPath:
      '/photos/cleanVent.jpg',
  },
  {
    label: 'Let us do the cleaning!',
    imgPath:
      '/photos/dirtyKitchen.jpg',

  },
  {
    label: 'Remove hidden stains and smells!',
    imgPath:
      '/photos/cleanKitchen.jpg',
  },
  {
    label: 'Let us do the cleaning!',
    imgPath:
      '/photos/dirtyStove.jpg',

  },
  {
    label: 'Elimination of grease & oil!',
    imgPath:
      '/photos/cleanStove.jpg',
  }
];









function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, margin: 'auto' }} >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          // pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography variant='h6' style={{ margin: "auto", color: '#1A94FF', fontWeight: '600' }}>{images[activeStep].label}</Typography>
      </Paper>




      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: 'block',
                  maxWidth: 600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;