export default function Timer({
	stage,
	switchStage,
	getTickingTime,
	seconds,
	ticking,
	setTicking,
}) {
	const options = ["Pomodoro", "Short Break", "Long Break"];

	return (
		<div className=" flex-col mt-10 w-10/12 mx-auto pt-5 text-white flex justify-center items-center">
			<div className="flex gap-5 items-center">
				{options.map((option, index) => {
					return (
						<h1
							key={index}
							className={` ${index == stage ? "bg-gray-500 bg-opacity-30" : ""} 
                        p-1 cursor-pointer transition-all`}
							onClick={() => switchStage(index)}
						>
							{option}
						</h1>
					);
				})}
			</div>

			<div className="mt-10 mb-10 ">
				<h1 className="text-8xl font-bold select-none">
					{getTickingTime()}:{seconds.toString().padStart(2, "0")}
				</h1>
			</div>
			<button className="bg-white p-2 rounded-lg text-black py-2 px-16 text-2xl text-blue-500 uppercase"
			onClick={() => setTicking(ticking => !ticking)}
			>
				{ticking? "Stop":"Start"}
			</button>
		</div>
	);
}