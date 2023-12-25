import { Box, Typography } from "@mui/material"
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "GET",
        cache: "no-store"
      });
      return res.json();  
  } catch (error) {
    console.log('Error while fetching tickets');
    console.log(error);
  }
}


const Dashboard = async () => {
  const { tickets } = await getTickets();
  const uniqueCategories = [ ...new Set(tickets?.map(({ category }) => category ))];
  return (
    <Box>
      {
        tickets && uniqueCategories.map( (uniqueCategory, categoryIndex) => {
          return <Box sx={{ marginBottom: 4}} key={categoryIndex}>
            <Typography variant="h3">
              {uniqueCategory}
            </Typography>
            <Box display='grid' gridTemplateColumns="repeat(auto-fill, minmax(30em, 1fr))">
              {
                tickets.filter(ticket => ticket.category === uniqueCategory).map((filterdTicket, _index) => {
                  return <TicketCard ticket={filterdTicket} key={_index} id={_index} />
                })
              }
            </Box>
          </Box>
        })
      }
    </Box>
    
  )
}

export default Dashboard