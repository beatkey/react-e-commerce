import {useGeneral} from "context";
import Button from "@mui/material/Button";

export default function Sort(){
    const {sort, setSort} = useGeneral()

    const sortButton = () => {
        if(sort){
            setSort(false)
        }else{
            setSort(true)
        }
    }

    return (
        <>
            <Button onClick={() => sortButton()} variant="contained" color="primary">
                Sort ({sort ? "Asc" : "Desc"})
            </Button>
        </>
    )
}
