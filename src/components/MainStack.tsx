import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { FormOneScreen } from "./FormOneScreen";
import { FormTwoScreen } from "./FormTwoScreen";
import { ChartsScreen } from "./ChartsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="FormOne"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="FormOne"
                component={FormOneScreen}
                options={{ title: "Form 1" }}
            />
            <StackNavigator.Screen
                name="FormTwo"
                component={FormTwoScreen}
                options={{ title: "Form 2" }}
            />
            <StackNavigator.Screen
                name="Charts"
                component={ChartsScreen}
                options={{ title: "Data Charts" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);