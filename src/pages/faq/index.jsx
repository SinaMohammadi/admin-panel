import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header subTitle="Frequently Asked Questions Page" title="FAQ" />
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            inventore illum atque nam. Esse sit sapiente rerum velit beatae?
            Repellat inventore quis distinctio omnis perspiciatis asperiores
            natus beatae, reiciendis necessitatibus?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            inventore illum atque nam. Esse sit sapiente rerum velit beatae?
            Repellat inventore quis distinctio omnis perspiciatis asperiores
            natus beatae, reiciendis necessitatibus?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            inventore illum atque nam. Esse sit sapiente rerum velit beatae?
            Repellat inventore quis distinctio omnis perspiciatis asperiores
            natus beatae, reiciendis necessitatibus?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            inventore illum atque nam. Esse sit sapiente rerum velit beatae?
            Repellat inventore quis distinctio omnis perspiciatis asperiores
            natus beatae, reiciendis necessitatibus?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
