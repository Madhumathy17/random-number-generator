import {Box, Typography} from '@mui/material'
import getColorForDigit from "../utils/utils.jsx";

const DigitWidget = ({height, width, variant, digit}) => (
    <Box sx={{
        backgroundColor: getColorForDigit(digit),
        height: height,
        width: width,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000"
    }}
    >
        <Typography
            variant={variant}
            component="div">
            {digit}
            {!digit && "-"}
        </Typography>
    </Box>
);

export default DigitWidget;