// moved from App.js [

// useContext auto-imported with tab when defining `useCurrentUser`
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// ]

/**
 * In NavBar.js, at the top of the NavBar arrow function,
 * the value of the currentUser variable is now a call
 * of the imported useCurrentUser method, still with the role
 * of being used at the return section to condition navbar.
 * 
 * i.e. const currentUser = useCurrentUser();
*/

export const useCurrentUser = () => useContext(CurrentUserContext);

/**
 * In SignInForm.js, at the top of the SignInForm() function,
 * the value of the setCurrentUser variable is now a call
 * of the imported useSetCurrentUser method, still with the role
 * of being used inside the handleSubmit method during login.
 * 
 * i.e. const setCurrentUser = useSetCurrentUser();
*/

export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// <CurrentUserProvider> custom tag imported and used in index.js

export const CurrentUserProvider = ({ children }) => {

    // moved from App.js [

    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
            const { data } = await axios.get('dj-rest-auth/user/');
            setCurrentUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    // ]

    return (

        // wrappers moved from App.js [

        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>

                {children}

            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>

        // ]

    );
};
