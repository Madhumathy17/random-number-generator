import digitConfig from "../config/digitConfig"

export default function getColorForDigit (digitValue){
    const matchingColorFromConfig = digitConfig.colors.find( c => c.min <= digitValue && c.max >= digitValue );
    if(matchingColorFromConfig){
        return matchingColorFromConfig.color;
    }
    if(digitValue){
        console.log("couldn't find matching color for digit :" + digitValue);
    }
    // use fallback colour
    return "#FFFFFF";
}