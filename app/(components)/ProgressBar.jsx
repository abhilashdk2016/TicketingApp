import { Box } from "@mui/material"

const ProgressBar = ({ progress }) => {
  return (
    <Box>
        <Box sx={{ width: `100%`, backgroundColor: "grey", borderRadius: "20px", height: '.5rem' }}>
            <Box sx={{ width: `${progress}%`, backgroundColor: "#0077c0", borderRadius: "20px", height: '.5rem' }}>
            
            </Box>
        </Box>
    </Box>
  )
}

export default ProgressBar