'use client';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/navigation';
const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: 'DELETE'
    });
    if(res.ok) {
      router.refresh();
    }
  }
  return (
    <ClearIcon style={{ color: "red" }} sx={{
        "&:hover": {
            cursor: "pointer",
            color: "#fa8072"
        }
    }} onClick={deleteTicket} />
  )
}

export default DeleteBlock