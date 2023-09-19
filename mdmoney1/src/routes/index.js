import React from "react";
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from "./auth.routes";

function Routes(){
    const loading = false; //usuário carregando
    const signed = false; //usuário logado

    return(
        signed ? <View></View> : <AuthRoutes/>
    )
}

export default Routes;
