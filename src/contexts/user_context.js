import React, {createContext, useEffect, useState} from "react";
import {db} from "../services/firebase";

export const UserContext = createContext();

function UserContextProvider(props) {
    let [user, updateUser] = useState(false);
    let [button1, setButton1] = useState(true);
    let [button2, setButton2] = useState(true);
    useEffect(() => {
        db.collection('buttons')
            .onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === "modified") {
                        let name = change.doc.data().name;
                        let value = change.doc.data().value;
                        if (name == "button-1") {
                            if (button1 !== value) setButton1(value);
                        } else {
                            if (button2 !== value) setButton2(value);
                        }
                    }

                });
            });
    })
    return (
        <UserContext.Provider  value={{user, updateUser, button1, button2}}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserContextProvider
