import { styled, Typography, Box } from "@mui/material";
import React from "react";
const MYtypo = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.secondary.main};
  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.palette.myColors.main};
  }
`;
const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Testingtheme = () => {
  return (
    <div>
      <UserBox>testing</UserBox>
      <MYtypo>testing</MYtypo>
      <Typography variant="h1" color="primary.dark">
        i am testing
      </Typography>
    </div>
  );
};

export default Testingtheme;
