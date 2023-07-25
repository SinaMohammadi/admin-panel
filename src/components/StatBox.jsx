import { Box, useTheme, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../theme";
const StatBox = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" color={colors.grey[100]} fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" color={colors.greenAccent[500]}>
          {subTitle}
        </Typography>
        <Typography
          variant="h4"
          color={colors.greenAccent[600]}
          fontStyle="italic"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
