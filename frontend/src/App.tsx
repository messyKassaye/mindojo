import FlowAnalysis from "./components/FlowAnalysis/FlowAnalysis"
import Header from "./components/Header/Header"
import Uploader from "./components/Uploader/Uploader"

function App() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="flex flex-col items-start justify-between md:w-[800px] w-full shadow-md h-full relative">
				<div className="w-full gap-3 h-full">
					<Header />
					<FlowAnalysis />
				</div>
				<Uploader />
			</div>
		</div>
	)
}

export default App
