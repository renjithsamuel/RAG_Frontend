"use client";
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useTicketDetailsStyles } from "./TicketDetails.styles";
import { JiraTicket } from "doc-bot/entity/JiraTicket/JiraTicket";
import { mockDeveloperManuals } from "doc-bot/entity/DeveloperManual/DeveloperManual.mock";
import { mockQAChecklists } from "doc-bot/entity/QAChecklist/QAChecklist.mock";
import { FiArrowLeft, FiCode, FiCheckCircle, FiGitBranch, FiBook } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { SiJira, SiBitbucket, SiConfluence } from "react-icons/si";

interface TicketDetailsProps {
  ticket: JiraTicket;
  onBack: () => void;
}

export const TicketDetails = ({ ticket, onBack }: TicketDetailsProps) => {
  const classes = useTicketDetailsStyles();
  const developerManual = mockDeveloperManuals[ticket.id];
  const qaChecklist = mockQAChecklists[ticket.id];

  // If no mock data exists for this ticket, show a fallback
  if (!developerManual || !qaChecklist) {
    return (
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Button
            startIcon={<FiArrowLeft />}
            onClick={onBack}
            className={classes.backButton}
          >
            Back to Tickets
          </Button>
        </Box>
        <Card className={classes.ticketCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h4" className={classes.ticketId}>
              {ticket.id}
            </Typography>
            <Typography variant="h5" className={classes.ticketTitle}>
              {ticket.title}
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {ticket.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
              Developer manual and QA checklist will be available soon for this ticket.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "critical": return "#d32f2f";
      case "high": return "#f57c00";
      case "medium": return "#1976d2";
      case "low": return "#388e3c";
      default: return "#757575";
    }
  };

  return (
    <Box className={classes.container}>
      {/* Header */}
      <Box className={classes.header}>
        <Button
          startIcon={<FiArrowLeft />}
          onClick={onBack}
          className={classes.backButton}
        >
          Back to Tickets
        </Button>
      </Box>

      {/* Ticket Info Card */}
      <Card className={classes.ticketCard}>
        <CardContent className={classes.cardContent}>
          <Box className={classes.ticketHeader}>
            <Typography variant="h4" className={classes.ticketId}>
              {ticket.id}
            </Typography>
            <Box className={classes.chips}>
              <Chip 
                label={ticket.type}
                sx={{ backgroundColor: "#1976d2", color: "white", fontWeight: 500 }}
              />
              <Chip 
                label={ticket.priority}
                sx={{ backgroundColor: getPriorityColor(ticket.priority), color: "white", fontWeight: 500 }}
              />
              <Chip 
                label={ticket.status}
                variant="outlined"
                sx={{ borderColor: "#0052cc", color: "#0052cc" }}
              />
            </Box>
          </Box>
          
          <Typography variant="h5" className={classes.ticketTitle}>
            {ticket.title}
          </Typography>
          
          <Typography variant="body1" className={classes.description}>
            {ticket.description}
          </Typography>

          <Box className={classes.metaInfo}>
            <Typography variant="body2">
              <strong>Assignee:</strong> {ticket.assignee}
            </Typography>
            <Typography variant="body2">
              <strong>Sprint:</strong> {ticket.sprint}
            </Typography>
            <Typography variant="body2">
              <strong>Story Points:</strong> {ticket.storyPoints}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Developer Manual */}
      <Card className={classes.manualCard}>
        <CardContent>
          <Box className={classes.sectionHeader}>
            <FiCode size={24} />
            <Typography variant="h5" className={classes.sectionTitle}>
              Developer Manual
            </Typography>
          </Box>

          <Typography variant="body1" className={classes.overview}>
            {developerManual.overview}
          </Typography>

          {/* Technical Requirements */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Technical Requirements</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {developerManual.technicalRequirements.map((req, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <FiCheckCircle color="#388e3c" />
                    </ListItemIcon>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Bitbucket Repositories */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Box className={classes.accordionTitle}>
                <SiBitbucket color="#0052cc" />
                <Typography variant="h6">Related Repositories</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {developerManual.repositories.map((repo, index) => (
                <Card key={index} className={classes.resourceCard}>
                  <CardContent>
                    <Typography variant="h6">{repo.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {repo.description}
                    </Typography>
                    {repo.branch && (
                      <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                        Branch: {repo.branch}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Confluence Documentation */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Box className={classes.accordionTitle}>
                <SiConfluence color="#0052cc" />
                <Typography variant="h6">Documentation</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {developerManual.confluencePages.map((page, index) => (
                <Card key={index} className={classes.resourceCard}>
                  <CardContent>
                    <Typography variant="h6">{page.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {page.description}
                    </Typography>
                    {page.lastUpdated && (
                      <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                        Last updated: {page.lastUpdated}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              ))}
            </AccordionDetails>
          </Accordion>

          {/* Code Snippets */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Box className={classes.accordionTitle}>
                <FiCode color="#0052cc" />
                <Typography variant="h6">Code Examples</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {developerManual.codeSnippets.map((snippet, index) => (
                <Box key={index} className={classes.codeSnippet}>
                  <Typography variant="subtitle1" className={classes.snippetTitle}>
                    {snippet.title}
                  </Typography>
                  <Box className={classes.codeBlock}>
                    <pre>{snippet.code}</pre>
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

      {/* QA Checklist */}
      <Card className={classes.manualCard}>
        <CardContent>
          <Box className={classes.sectionHeader}>
            <FiCheckCircle size={24} />
            <Typography variant="h5" className={classes.sectionTitle}>
              QA Validation Checklist
            </Typography>
          </Box>

          {/* Functional Tests */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Functional Tests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {qaChecklist.functionalTests.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemIcon>
                      <FiCheckCircle color="#64748b" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.description}
                      secondary={`Priority: ${item.priority} | Category: ${item.category}`}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Security Tests */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Security Tests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {qaChecklist.securityTests.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemIcon>
                      <FiCheckCircle color="#d32f2f" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.description}
                      secondary={`Priority: ${item.priority} | Category: ${item.category}`}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Performance Tests */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Performance Tests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {qaChecklist.performanceTests.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemIcon>
                      <FiCheckCircle color="#f57c00" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.description}
                      secondary={`Priority: ${item.priority} | Category: ${item.category}`}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Usability Tests */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Usability Tests</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {qaChecklist.usabilityTests.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemIcon>
                      <FiCheckCircle color="#1976d2" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.description}
                      secondary={`Priority: ${item.priority} | Category: ${item.category}`}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Test Scenarios */}
          <Accordion className={classes.accordion}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography variant="h6">Test Scenarios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {qaChecklist.testScenarios.map((scenario, scenarioIndex) => (
                <Card key={scenarioIndex} className={classes.resourceCard}>
                  <CardContent>
                    <Typography variant="h6">{scenario.title}</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Priority: {scenario.priority}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Steps:</Typography>
                    <List dense>
                      {scenario.steps.map((step, stepIndex) => (
                        <ListItem key={stepIndex}>
                          <ListItemText primary={`${stepIndex + 1}. ${step}`} />
                        </ListItem>
                      ))}
                    </List>
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Expected Result:</Typography>
                    <Typography variant="body2">{scenario.expectedResult}</Typography>
                  </CardContent>
                </Card>
              ))}
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
};
