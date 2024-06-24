import {useEffect, useState} from 'react';
import {Button, Fade, Grid} from "@mui/material";
import DigitWidget from "../components/DigitWidget.jsx";
import DropDown from "../components/DropDown.jsx";
import RandomLib from "../lib/RandomLib.jsx";
import HistoryWidget from "../components/HistoryWidget.jsx";
import digitConfig from "../config/digitConfig"

const GeneratorPage = () => {

    const [noOfDigits, setNoOfDigits] = useState(digitConfig.defaultCount);
    const [randomDigits, setRandomDigits] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect( () => {
        if(randomDigits.length > 0){
            const record = {
                date : new Date(),
                digits : randomDigits
            }
            setHistory([record].concat(history))
        }
    },[randomDigits]);

    const onNoOfDigitsChange = (value) => setNoOfDigits(value);

    function getDigitWidget(val) {
        let digitVal = undefined;
        if (randomDigits.length > val) {
            digitVal = randomDigits[val]
        }
        return (
            <DigitWidget
                key={val}
                idx={val}
                digit={digitVal}
                width={100}
                height={100}
                variant={"h3"}
            />
        )
    }

    const getDigitsWidget = () => (
        <Grid
            container
            direction="row"
            justifyContent={"center"}
            alignItems="center"
            spacing={3}
            data-testid={"digit-container"}
        >
            {
                [...Array(noOfDigits).keys()].map((val => (
                    <Grid item key={val}>
                        {getDigitWidget(val)}
                    </Grid>
                )))
            }
        </Grid>
    )

    const handleGenerate = () =>{
        setRandomDigits(RandomLib.generateUniqueRandomNumbers(noOfDigits, digitConfig.min, digitConfig.max));
    }

    const getDigitsDropDownValues = () => {
        const digitValues = [];
        for(let i = digitConfig.minCount; i <= digitConfig.maxCount; i++) {
            digitValues.push(i);
        }
        return digitValues;
    }

    return (
        <Fade in={true} timeout={{enter: 500}}>
            <div className="generator">
                <h2 data-testid="page-title" className="page-title">
                    Lottery Number Generator
                </h2>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid
                        item
                        xs={1}
                    >
                        <DropDown
                            labelString={"Number of digits"}
                            values={getDigitsDropDownValues()}
                            onValueChange={onNoOfDigitsChange}
                            defaultValue={digitConfig.defaultCount}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        {getDigitsWidget()}
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <Button
                            data-testid={"button-generate"}
                            onClick={handleGenerate}
                            variant="contained"
                            color="primary"
                        >
                            Generate
                        </Button>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <HistoryWidget
                            noOfDigits={noOfDigits}
                            history={history}
                        />
                    </Grid>

                </Grid>
            </div>
        </Fade>
    )
}

export default GeneratorPage;