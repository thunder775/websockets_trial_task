import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import resetButtons, {updateButton} from "../firebase_functions/firestore";
import {UserContext} from "../contexts/user_context";
import {signOut} from "../firebase_functions/authorisation";


export default function ButtonsPage() {
    let {user, updateUser, button1, button2} = useContext(UserContext);
    console.log("context details " + JSON.stringify(useContext(UserContext)))
    return (
        user !== false && <div>
            <Button onClick={button1 ? async () => {
                try {
                    await updateButton("button-1", false)
                } catch (error) {
                }
            } : () => {
            }} color="primary"
                    variant="contained"
                    style={{marginTop: "10px", marginLeft: "10px", backgroundColor: button1 ? "blue" : "red"}}
            >
                Button - 1
            </Button>
            <Button onClick={button2 ? async () => {
                try {
                    await updateButton("button", false)
                } catch (error) {
                }
            } : () => {
            }} color="primary"
                    variant="contained"
                    style={{marginTop: "10px", marginLeft: "10px", backgroundColor: button2 ? "blue" : "red"}}
            >
                Button - 2
            </Button>
            <Button onClick={async () => {
                try {
                    await resetButtons();
                } catch (error) {
                }
            }} color="primary"
                    variant="contained" style={{marginTop: "10px", marginLeft: "10px"}}
            >
                Reset Buttons
            </Button>
            <Button onClick={async () => {
                try {
                    await signOut()
                    updateUser(false)
                } catch (error) {
                }
            }} color="primary"
                    variant="contained" style={{marginTop: "10px", marginLeft: "10px"}}
            >
                Logout
            </Button>
        </div>)
}