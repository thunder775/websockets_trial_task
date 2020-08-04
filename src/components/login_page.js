import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {signIn, signUp} from "../firebase_functions/authorisation";
import resetButtons from "../firebase_functions/firestore";
import {UserContext} from "../contexts/user_context";

export default function LoginPage() {
    let [email, setEmail] = useState('');
    let [pwd, setPwd] = useState('');
    let {user, updateUser, button1, button2} = useContext(UserContext);

    return (
        user === false &&
        <div style={{marginLeft: "20px", marginTop: "20px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(event => setEmail(event.target.value))}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event => setPwd(event.target.value))}

                    />
                </Grid>
            </Grid>
            <Button onClick={async () => {
                try {
                    await signIn(email, pwd);
                    await resetButtons();
                    updateUser(true);
                } catch (error) {

                }
            }} color="primary"
                    variant="contained" style={{marginTop: "10px"}}
            >
                Login
            </Button>
            <Button onClick={async () => {
                try {
                    await signUp(email, pwd);
                } catch (error) {
                }
            }} color="primary"
                    variant="contained" style={{marginTop: "10px", marginLeft: "10px"}}
            >
                Sign Up
            </Button>
        </div>
    )

}