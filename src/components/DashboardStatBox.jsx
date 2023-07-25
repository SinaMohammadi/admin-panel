import { EmailOutlined } from "@mui/icons-material";
import StatBox from "./StatBox";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box } from "@mui/material";

const DashboardStatBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subTitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailOutlined
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subTitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailOutlined
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subTitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailOutlined
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="12,361"
          subTitle="Emails Sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailOutlined
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </>
  );
};
export default DashboardStatBox;
