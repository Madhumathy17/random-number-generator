import {DataGrid} from '@mui/x-data-grid';
import DigitWidget from "./DigitWidget.jsx";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from "moment";

const HistoryWidget = ({noOfDigits, history}) => {

        const getColumns = () => {
            const columns = [...Array(noOfDigits).keys()].map((val, idx) => ({
                field: idx + "",
                headerName: "Digit " + (val + 1),
                type: 'number',
                sortable: 'false',
                renderCell: (params) => (
                    <DigitWidget
                        idx={val}
                        digit={params.value}
                        width={40}
                        height={30}
                    />
                )
            }));

            columns.push({
                field: "date",
                headerName: "Generated at",
                type: "date",
                width: 250,
                renderCell: (params) => (
                    <div>
                        {
                            moment(params.value).format('MMMM Do YYYY, h:mm:ss a')
                        }
                    </div>
                )
            })

            return columns;
        }

        const getRows = () => {
            const rows = [];
            for (let i = 0; i < history.length; i++) {
                const historyDigits = history[i].digits
                const rowObj = {}
                for (let j = 0; j < historyDigits.length; j++) {
                    rowObj[j + ""] = historyDigits[j]
                    rowObj["id"] = i + "-" + "j"
                }
                rowObj["date"] = history[i].date
                rows.push(rowObj)
            }
            return rows;
        }


        return (
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >Your last few tickets
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{height: 400, width: '90%'}}>
                        <DataGrid
                            data-testid="history-table"
                            disableColumnSorting
                            rows={getRows()}
                            columns={getColumns()}
                            initialState={{
                                pagination: {
                                    paginationModel: {page: 0, pageSize: 5},
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        );
}

export default HistoryWidget;