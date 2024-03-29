/** @format */

import React, { createContext } from "react";

export const LoginContext = createContext({});

// Step 1. Create a Context using createCOntext
// Step 2. in the parent file use it to wrap the sibling components use the name and adding .provider
// Step 3. assign a value to it , it can be anything preferably useState
// Step 4. in the child component destructure the values assigned you want to use
// i.e const {destructured1, destructured2} = useContext(name of create context)
