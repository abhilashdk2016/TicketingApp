import TicketForm from '@/app/(components)/TicketForm';
import React from 'react';

const getTicketById = async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
      method: 'GET'
    });
    if(!res.ok) {
      throw new Error("Failed to get ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const TicketPage = async ({ params }) => {
  const EDIT_MODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.ticket;
  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return <TicketForm ticket={updateTicketData} editMode={EDIT_MODE} />;
}

export default TicketPage