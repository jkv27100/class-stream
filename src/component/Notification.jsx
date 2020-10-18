import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { annou, submissions, events } from "../Notices";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Anouncements</Typography>
          <Typography className={classes.secondaryHeading}>
            Check Out Latest Anouncements
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Results are out
            {annou.map((x) => (
              <li>{x}</li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Notice</Typography>
          <Typography className={classes.secondaryHeading}>
            Latest Notices
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Notice links</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Upcoming Submissions
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Assignment Dates
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            {submissions.map((x) => (
              <li>{x}</li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            {events.map((x) => (
              <li>{x}</li>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
