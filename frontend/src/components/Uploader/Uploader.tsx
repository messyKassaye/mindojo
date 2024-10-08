import { Icon } from "@iconify/react"
import { ChangeEvent, useRef, useState } from "react"
import AxiosService from "../../services/https.service"
import { ISheet } from "../../models/ISheet"
import { useAppDispatch } from "../../store/redux-hooks/redux-hooks"
import { updateSheetState } from "../../store/slice/sheetSlice"
import { backend_routes } from "../../utils/backend_routes"
const Uploader = () => {
	const [fileUploadProgress, setFileUploadProgress] = useState<number>(0)
	const [isFileUploading, setIsFileUploading] = useState(false)
	const fileInputRef = useRef<HTMLInputElement>(null)
	const dispatch = useAppDispatch()

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]

		if (selectedFile) {
			setIsFileUploading(true)
			const formData = new FormData()
			formData.append("file", selectedFile)
			AxiosService()
				.post(backend_routes.uploadFile, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: (event) => {
						if (event.total) {
							const percent = Math.round((event.loaded * 100) / event.total)
							setFileUploadProgress(percent)
						}
					},
				})
				.then((response) => {
					const analysisData: ISheet[] = response.data
					setIsFileUploading(false)
					dispatch(updateSheetState(analysisData))
				})
				.catch((err) => {
					setIsFileUploading(false)
					console.log(err)
				})
		}
	}

	const handleFileClick = () => {
		if (fileInputRef.current) {
			fileInputRef?.current.click()
		}
	}

	return (
		<div className="w-full bg-slate-100">
			<input
				className="hidden"
				type="file"
				accept=".xlsx, .xls"
				ref={fileInputRef}
				onChange={handleFileChange}
			/>
			{isFileUploading ? (
				<div className="w-full flex items-center justify-center">
					<span className="font-bold text-3xl">Uploading....</span>
					<span>{`${fileUploadProgress}%`}</span>
				</div>
			) : (
				<div
					onClick={handleFileClick}
					className="flex items-center cursor-pointer capitalize justify-center gap-3 p-3 text-3xl font-bold w-full"
				>
					<Icon icon={"ph:file-xls-fill"} fontSize={52} />
					Uploader excel file
				</div>
			)}
		</div>
	)
}

export default Uploader
