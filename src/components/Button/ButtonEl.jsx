import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Button.scss";

export const ButtonEl = ({ children, onButtonClick, disabled }) => {
  return (
    <Box className="flex" mt={2}>
      <Button
        data-testid="button"
        variant="contained"
        type="submit"
        disabled={disabled}
        onClick={onButtonClick}
      >
        {children}
      </Button>
    </Box>
  );
};
