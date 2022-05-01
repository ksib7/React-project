import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import "./Button.scss";

export const ButtonEl = ({ children, onButtonClick }) => {
  return (
    <Box className="flex" mt={2}>
      <Button variant="contained" type="submit" onClick={onButtonClick}>
        {children}
      </Button>
    </Box>
  );
};

ButtonEl.propTypes = {
  onButtonClick: PropTypes.func,
};
