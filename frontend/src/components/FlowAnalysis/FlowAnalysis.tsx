import { useAppSelector } from "../../store/redux-hooks/redux-hooks"

const FlowAnalysis = () => {
	const { sheetState } = useAppSelector((state) => state.sheetSlice)
	return (
		<div className="p-2">
			{sheetState.map((sheet) => (
				<div key={sheet.sheet_name} className="mb-4">
					<table className="border-collapse">
						<thead>
							<tr className="bg-gray-200">
								<th className="font-bold capitalize border px-4 py-2">
									Sheet name
								</th>
								<th className="font-bold capitalize border px-4 py-2">
									No of water flow cell
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="font-bold capitalize border px-4 py-2">
									{sheet.sheet_name}
								</td>
								<td className="font-bold capitalize border px-4 py-2">
									{sheet.count}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}

export default FlowAnalysis
