import { FiCommand } from "react-icons/fi"
import { FiSettings } from "react-icons/fi";
const Navigation = () => {
    return (
			<nav className="pt-4 flex justify-between w-11/12">
				<div className="flex item-center gap-1 cursor-pointer">
					<FiCommand className="text-sm text-white" />
                    <h1 className="text-white">ChopProductivity Pomodoro</h1>
				</div>
                <FiSettings className="text-2xl cursor-pointer text-white" />
			</nav>
		);
}

export default Navigation 