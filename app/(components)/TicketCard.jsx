'use client';
import { Box, Typography, styled } from "@mui/material"
import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressBar from "./ProgressBar"
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const StyledBox = styled(Box)(( { color }) => ({
        display: "flex",
        flexDirection: "column",
        "&:hover": {
            boxShadow: `5px 5px 3px 0px rgba(0,0,0,0.34)`,
            border: `2px ${color} solid`,
            cursor: 'pointer'
        },
        borderRadius: '10px',
        padding: '15px',
        margin: '10px',
        border: "1px solid black",
        position: 'relative',
        overflow: 'hidden'
    }
));

const getColor = (status) => {
    let color = '#002244';
    switch(status.toLowerCase()) {
      case 'notstarted': color = '#002244'; break;
      case 'started': color = '#800080'; break;
      case 'done': color = '#008B8B'; break;
      default: color = '#002244'; break;
    }
    return color;
  }

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = timeStamp => {
    const options = {
        year: "numeric",
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };
    const date = new Date(timeStamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  }
  return (
    <StyledBox color={getColor(ticket.status)}>
        <Box sx={{
            display: "flex",
            marginBottom: '3px'
        }}>
            <PriorityDisplay priority={ticket.priority}/>
            <Box sx={{
                marginLeft: "auto"
            }}>
                <DeleteBlock id={ticket._id} />
            </Box>
        </Box>
        <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents", color: "black" }}>
            <Typography variant="h4">
                {ticket.title}
            </Typography>
            <Typography variant="p" sx={{ whiteSpace: "pre-wrap"}}>
                {ticket.description}
            </Typography>
            <Box sx={{ flexGrow: "1"}}></Box>
            <Box sx={{
                display: "flex",
                marginTop: "5px",

            }}>
                <Box sx={{ display: "flex", flexDirection: "column"}}>
                    <Typography variant="p" sx={{ fontSize: "xs", marginLeft: '1px'}}>
                        { formatTimeStamp(ticket.createdAt)}
                    </Typography>
                    <ProgressBar progress={ticket.progress} />
                </Box>
                <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "flex-end" }}>
                    <StatusDisplay status={ticket.status} />
                </Box>
                
            </Box>
        </Link>
    </StyledBox>
  )
}

export default TicketCard