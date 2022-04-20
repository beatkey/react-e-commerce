import Header from '../../components/Header';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

function SignIn() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label="With sx" variant="standard" />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
