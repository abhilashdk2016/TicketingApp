"use client";
import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Slider, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const TicketForm = ({ ticket, editMode }) => {
  const router = useRouter();
  const isStatusDone = ticket.status === "done" ? true : false;
  let initialTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem"
  };

  if(editMode) {
    initialTicketData = {
      title: ticket.title,
      description: ticket.description,
      priority: ticket.priority,
      progress: ticket.progress,
      status: ticket.status,
      category: ticket.category
    };
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = name === "priority" || name === "progress" ? parseInt(e.target.value) : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json"
    });
    if(!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
  }

  const updateTicket = async _ => {
    const res = await fetch(`/api/Tickets/${ticket._id}`, {
      method: "PUT",
      body: JSON.stringify({ formData }),
      "content-type": "application/json"
    });
    if(!res.ok) {
      throw new Error("Failed to update ticket");
    }
    router.refresh();
  }

  const [formData, setFormData] = useState(initialTicketData);
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <form method="post" onSubmit={handleSubmit}>
        <Typography variant="h3" width="50%" margin="0 auto" textAlign={"center"}>
          {
            editMode 
            ? `Update Your Ticket`
            : `Create Your Ticket`
          }
        </Typography>
        <Stack spacing={2} width="50%" margin="0 auto">
          <TextField
                type="text"
                variant='outlined'
                color='secondary'
                label="Title"
                value={formData.title}
                sx={{mb: 4}}
                onChange={handleChange} 
                required
                name="title"
                disabled={isStatusDone}
          />
          <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="Description"
              value={formData.description}
              sx={{mb: 4}}
              onChange={handleChange} 
              required
              multiline
              rows={4}
              name="description"
              disabled={isStatusDone}
          />
          <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="Category"
              value={formData.category}
              sx={{mb: 4}}
              select
              name="category"
              onChange={handleChange}
              disabled={isStatusDone}
              helperText="Please select category">
                <MenuItem value="Hardware Problem">
                  Hardware Problem
                </MenuItem>
                <MenuItem value="Software Problem">
                  Software Problem
                </MenuItem>
                <MenuItem value="Project Issue">
                  Project Issue
                </MenuItem>
          </TextField>
          <FormControl>
            <FormLabel id="priority">Priority</FormLabel>
            <RadioGroup
              row
              aria-labelledby="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              disabled={isStatusDone}
            >
              <FormControlLabel value={1} control={<Radio />} label="1" />
              <FormControlLabel value={2} control={<Radio />} label="2" />
              <FormControlLabel value={3} control={<Radio />} label="3" />
              <FormControlLabel value={4} control={<Radio />} label="4" />
              <FormControlLabel value={5} control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
          <Slider aria-label="progress" name="progress" value={formData.progress} onChange={handleChange} disabled={isStatusDone}/>
          <TextField
              type="text"
              variant='outlined'
              color='secondary'
              label="Status"
              value={formData.status}
              sx={{mb: 4}}
              select
              name="status"
              onChange={handleChange}
              disabled={isStatusDone}
              helperText="Please select status">
                <MenuItem value="not started">
                  Not started
                </MenuItem>
                <MenuItem value="started">
                  Started
                </MenuItem>
                <MenuItem value="done">
                  Done
                </MenuItem>
          </TextField>
          <FormControl></FormControl>
          {
            editMode && !isStatusDone 
            && <Button variant="contained" color="primary" type="button" onClick={updateTicket}>Update Ticket</Button>
          }
          {
            !editMode && <Button variant="contained" color="primary" type="submit">Create Ticket</Button>
          }
        </Stack>
      </form>
    </Box>
  )
}

export default TicketForm