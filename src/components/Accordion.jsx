import { AccordionSummary, AccordionDetails, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordion.css';
const SimpleAccordion = ({ heading, paragraph }) => {
  return (
    <div>
      <Accordion sx={{ boxShadow: '0' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>{heading}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p>{paragraph}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
