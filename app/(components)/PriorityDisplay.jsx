import { Box } from "@mui/material";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

const PriorityDisplay = ({ priority }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "baseline" }}>
        <LocalFireDepartmentOutlinedIcon sx={{ color: priority > 0 ? "#FBB741" : "black" }} />
        <LocalFireDepartmentOutlinedIcon sx={{ color: priority > 1 ? "#FBB741" : "black" }} />
        <LocalFireDepartmentOutlinedIcon sx={{ color: priority > 2 ? "#FBB741" : "black" }} />
        <LocalFireDepartmentOutlinedIcon sx={{ color: priority > 3 ? "#FBB741" : "black" }} />
        <LocalFireDepartmentOutlinedIcon sx={{ color: priority > 4 ? "#FBB741" : "black" }} />
    </Box>
  )
}

export default PriorityDisplay