import {TableRows, ViewComfy, ViewStream, ViewWeek} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useGeneral} from "context";

export default function View(){
    const {view, setView} = useGeneral();

    const ChangeView = () => {
        switch (view) {
            case 1:
                setView(2);
                break;
            case 2:
                setView(3);
                break;
            case 3:
                setView(4);
                break;
            case 4:
                setView(1);
                break;
            default:
                setView(2);
        }
    };

    const ViewIcon = () => {
        switch (view) {
            case 1:
                return <ViewComfy/>;
            case 2:
                return <ViewWeek/>;
            case 3:
                return <ViewStream/>;
            case 4:
                return <TableRows/>;
            default:
                return <ViewComfy/>;
        }
    };

    return (
        <>
            <Button onClick={() => ChangeView()} variant="contained" color="success"
                    endIcon={<ViewIcon/>}>
                View
            </Button>
        </>
    )
}
