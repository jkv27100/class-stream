import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { annou, submissions, events } from "../services/Notices";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  Accordion: { background: "black" },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "white",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "white",
  },
  detail: { color: "white" },
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
        className={classes.Accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.detail} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Anouncements</Typography>
          <Typography className={classes.secondaryHeading}>
            Check Out Latest Anouncements
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <Typography>
            {annou.map((x) => x.map((y) => <li>{y}</li>))}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.Accordion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.detail} />}
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
        <AccordionDetails className={classes.detail}>
          <Typography>
            {submissions.map((x) => x.map((y) => <li>{y}</li>))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.Accordion}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.detail} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>VTU Circulars</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <Typography>
            {events.map((x) => x.map((y) => <a href={y}>{y}</a>))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
