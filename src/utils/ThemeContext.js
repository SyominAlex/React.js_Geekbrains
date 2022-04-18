import React from "react";

export const ThemeContext = React.createContext({
    theme: "",
    changeTheme: () => {
        console.log("default");
    },
});
