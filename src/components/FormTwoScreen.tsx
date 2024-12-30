import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type FormTwoProps = {
    route: RouteProp<MainStackParamList, "FormTwo">,
    navigation: FrameNavigationProp<MainStackParamList, "FormTwo">,
};

export function FormTwoScreen({ navigation }: FormTwoProps) {
    const [stringValue1, setStringValue1] = React.useState("");
    const [stringValue2, setStringValue2] = React.useState("");
    const [floatValue, setFloatValue] = React.useState("");
    const [intValue, setIntValue] = React.useState("");

    const handleSubmit = async () => {
        try {
            // Here you would make your API call
            console.log("Submitting:", {
                stringValue1,
                stringValue2,
                floatValue: parseFloat(floatValue),
                intValue: parseInt(intValue, 10)
            });
            
            // Navigate to Charts
            navigation.navigate("Charts");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <label className="text-xl mb-4">Form Two</label>
                
                <label>First String Value:</label>
                <textField
                    text={stringValue1}
                    onTextChange={(args) => setStringValue1(args.value)}
                    className="input p-2 mb-4 border rounded"
                />

                <label>Second String Value:</label>
                <textField
                    text={stringValue2}
                    onTextChange={(args) => setStringValue2(args.value)}
                    className="input p-2 mb-4 border rounded"
                />

                <label>Float Value:</label>
                <textField
                    text={floatValue}
                    keyboardType="number"
                    onTextChange={(args) => setFloatValue(args.value)}
                    className="input p-2 mb-4 border rounded"
                />

                <label>Integer Value:</label>
                <textField
                    text={intValue}
                    keyboardType="number"
                    onTextChange={(args) => setIntValue(args.value)}
                    className="input p-2 mb-4 border rounded"
                />

                <button
                    className="btn btn-primary p-2"
                    onTap={handleSubmit}
                >
                    Submit
                </button>

                <button
                    className="btn btn-secondary p-2 mt-4"
                    onTap={() => navigation.navigate("Charts")}
                >
                    View Charts
                </button>
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});