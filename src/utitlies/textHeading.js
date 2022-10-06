import { withStyles } from "@mui/material";
import {Typography} from "@mui/material";
const styles = {
    h4: {
      color: 'pink'
    }
  };
  
  
  export const CustomTypography = withStyles(styles)(Typography)