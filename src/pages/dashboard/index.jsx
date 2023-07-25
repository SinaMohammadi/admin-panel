import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DownloadDoneOutlined } from "@mui/icons-material";
import Header from "../../components/Header";
import DashboardStatBox from "../../components/DashboardStatBox";
import DashboardSelesReport from "../../components/DashboardSalesReport";
import DashboardCharts from "../../components/DashboardCharts";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header subTitle="Welcome To Your Dashboard" title="Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadDoneOutlined
              sx={{
                mr: "10px ",
              }}
            />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <DashboardStatBox />
        <DashboardSelesReport />
        <DashboardCharts />
      </Box>
    </Box>
  );
};
export default Dashboard;
