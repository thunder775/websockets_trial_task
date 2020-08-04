import React from 'react';
import './App.css';
import LoginPage from "./components/login_page";
import UserContextProvider from "./contexts/user_context";
import ButtonsPage from "./components/buttons_screen";

function App() {
    // let {user, updateUser, button1, button2} = useContext(UserContext);
    return (
        <UserContextProvider>
            <LoginPage/>
            <ButtonsPage/>
        </UserContextProvider>

    );
}

export default App;
