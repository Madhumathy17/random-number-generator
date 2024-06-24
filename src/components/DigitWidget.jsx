import {Box, Typography} from '@mui/material'
import getColorForDigit from "../utils/utils.jsx";
import * as PropTypes from "prop-types";
import {Component} from "react";

class DigitWidget extends Component {
    render() {
        let {idx, height, width, variant, digit} = this.props;
        return (
            <Box sx={{
                backgroundColor: getColorForDigit(digit),
                height: height,
                width: width,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
    }
}

DigitWidget.propTypes = {
    idx: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
    variant: PropTypes.string,
    digit: PropTypes.number
}

export default DigitWidget;