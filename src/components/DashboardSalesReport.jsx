import { Box, IconButton, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { DownloadOutlined } from "@mui/icons-material";
import LineChart from "./LineChart";
import { mockTransactions } from "../data/mockData";

const DashboardSelesReport = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          alignItems="center"
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlined
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          color={colors.grey[100]}
          p="15px"
        >
          <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((item, i) => (
          <Box
            key={`${item.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {item.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{item.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              {item.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default DashboardSelesReport