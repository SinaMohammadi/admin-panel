import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import GeographyChart from "./GeographyChart";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import BarChart from "./BarChart";

const DashboardCharts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
          Campaign
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle    size="125" />
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.greenAccent[500]}
            sx={{
              mt: "15px",
            }}
          >
            $48,352 revenue generated
          </Typography>
          <Typography>Includes extrea misc expenditures and costs</Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.grey[100]}
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.grey[100]}
          sx={{ mb: "15px" }}
        >
          Geography Based Trafic
        </Typography>
        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};
export default DashboardCharts;
