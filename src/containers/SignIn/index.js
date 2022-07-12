import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "context/Auth";

import Header from 'components/Header';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Alert} from '@mui/material';

function SignIn() {
    const {loggedIn, setLoggedIn} = useAuth();
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorAlert, setErrorAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);

    function Submit(e){
        e.preventDefault();

        setErrorAlert(false)
        setSuccessAlert(false)

        if(username==="emre" && password==="123"){
            setLoggedIn(true)
            setSuccessAlert(true)
            navigate("/")
        }else{
            setErrorAlert(true)
            setLoggedIn(false)
        }
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            {
                loggedIn
                    ?
                        "you already logged in"
                    :
                    <div className="container mt-5">
                        <form onSubmit={Submit} className="row align-items-center justify-content-center">
                            {errorAlert && <Alert severity="error">Username or password is wrong!</Alert>}
                            {successAlert && <Alert severity="success">Login</Alert>}
                            <Box className="mt-3" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    required={true}
                                    autoComplete="username"
                                    onChange={e => setUsername(e.target.value)}
                                    label="Username (emre)"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField
                                    required={true}
                                    autoComplete="current-password"
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                    label="Password (123)"
                                    variant="standard"
                                />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Button type="submit" className="mt-4" variant="contained">Send</Button>
                            </Box>
                        </form>
                    </div>
            }
        </div>
    )
}

export default SignIn;
