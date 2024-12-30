import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { GridLayout, ContentView } from "@nativescript/core";

type ChartDataPoint = {
	category: string;
	value: number;
};

type ChartsProps = {
	route: RouteProp<MainStackParamList, "Charts">;
	navigation: FrameNavigationProp<MainStackParamList, "Charts">;
};

export function ChartsScreen({ navigation }: ChartsProps) {
	const [chartData1, setChartData1] = React.useState<ChartDataPoint[]>([]);
	const [chartData2, setChartData2] = React.useState<ChartDataPoint[]>([]);

	React.useEffect(() => {
		// Here you would fetch your chart data from the backend
		const fetchData = async () => {
			try {
				// Simulated data - replace with actual API calls
				setChartData1([
					{ category: "A", value: 10 },
					{ category: "B", value: 20 },
					{ category: "C", value: 30 },
				]);

				setChartData2([
					{ category: "X", value: 15 },
					{ category: "Y", value: 25 },
					{ category: "Z", value: 35 },
				]);
			} catch (error) {
				console.error("Error fetching chart data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<scrollView>
			<stackLayout style={styles.container}>
				<label className="text-xl mb-4">Data Charts</label>

				<gridLayout rows="300, 300" columns="*">
					{/* First Chart */}
					<stackLayout row={0} className="chart-container">
						<label className="h3 mb-2">Data Series 1</label>
						<gridLayout className="chart-bars" rows="auto" columns="*, *, *">
							{chartData1.map((point, index) => (
								<stackLayout
									key={point.category}
									col={index}
									className="chart-bar-container">
									<stackLayout
										className="chart-bar"
										style={{
											height: `${point.value * 3}%`,
											backgroundColor: "#4CAF50",
										}}
									/>
									<label className="chart-label">{point.category}</label>
									<label className="chart-value">{point.value}</label>
								</stackLayout>
							))}
						</gridLayout>
					</stackLayout>

					{/* Second Chart */}
					<stackLayout row={1} className="chart-container">
						<label className="h3 mb-2">Data Series 2</label>
						<gridLayout className="chart-bars" rows="auto" columns="*, *, *">
							{chartData2.map((point, index) => (
								<stackLayout
									key={point.category}
									col={index}
									className="chart-bar-container">
									<stackLayout
										className="chart-bar"
										style={{
											height: `${point.value * 3}%`,
											backgroundColor: "#2196F3",
										}}
									/>
									<label className="chart-label">{point.category}</label>
									<label className="chart-value">{point.value}</label>
								</stackLayout>
							))}
						</gridLayout>
					</stackLayout>
				</gridLayout>

				<button onTap={() => navigation.navigate("FormOne", {})}>
					Back to Form 1
				</button>
			</stackLayout>
		</scrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		height: "100%",
	},
});
