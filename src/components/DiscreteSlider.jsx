import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  return `₹${value}`;
}

// Custom tooltip to show ₹ value on hover (Bold & Bigger)
function ValueLabelComponent(props) {
  const { children, value } = props;
  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={
        <Typography sx={{ fontSize: "1.05rem", fontWeight: "bold" }}>
          ₹{value}
        </Typography>
      }
    >
      {children}
    </Tooltip>
  );
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Price Range"
        defaultValue={2000}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        slots={{ valueLabel: ValueLabelComponent }} // Shows ₹ value on hover (Bold & Bigger)
        step={500}
        marks
        min={0}
        max={10000}
        sx={{
          color: "black", // Makes slider black
          height: 6, // Thicker slider track
          "& .MuiSlider-thumb": {
            backgroundColor: "black", // Thumb color
            width: 24, // Bigger thumb
            height: 24,
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "none", // Removes default shadow
            },
          },
          "& .MuiSlider-track": {
            backgroundColor: "black", // Track color
            height: 6, // Thicker track
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#b0b0b0", // Rail color
            height: 6, // Thicker rail
          },
          "& .MuiSlider-mark": {
            backgroundColor: "white", // White marks
            width: 4, // Bigger marks (dots)
            height: 4,
            borderRadius: "50%", // Circular marks
          },
        }}
      />
    </Box>
  );
}
