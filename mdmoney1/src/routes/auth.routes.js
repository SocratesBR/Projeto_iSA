import React from "react";
import { create, createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SIgnUp";

const AuthStack = createNativeStackNavigator();

function AuthStack(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />

            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;