import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" mb="30px" flexDirection="column">
      <Typography color={colors.grey[100]} variant="h2" sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography color={colors.greenAccent[400]} variant="h5">
        {subTitle}
      </Typography>
    </Box>
  );
};
export default Header;
