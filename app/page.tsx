'use client'
import About from "@/components/modals/about";
import Alarm from "@/components/modals/alarm";
import Navigation from "@/components/modals/navigation";
import Timer from "@/components/modals/timer";
import { useEffect, useState } from "react";


export default function Home() {


	const [pomodoro, setPomodoro] = useState(25);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(10);
	const [seconds, setSeconds] = useState(0);
	const [ ticking, setTicking] = useState(false);
	const [consumedSecond, setConsumedSecond] = useState(0)
	const [stage, setStage] = useState(0);

	const switchStage = (index) => {
		setStage(index);
		const Yes = consumedSecond && stage != index ? confirm("Are you sure you want to switch?"):false
		if(Yes){
			reset()
			setStage(index)
		
		}else if(!consumedSecond){
			setStage(index)
		}
	}

	const getTickingTime = () =>{
		const timeStage = {
			0:pomodoro,
			1:shortBreak,
			2:longBreak
		}

		return timeStage[stage]
	};

	const updateMinute = () => {
				const updateStage = {
					0: setPomodoro,
					1: setShortBreak,
					2: setLongBreak,
				};

				return updateStage[stage];
	}

	const reset = () => {
		setConsumedSecond(0)
		setTicking(false);
		setPomodoro(25);
		setLongBreak(10);
		setShortBreak(5);
		setSeconds(0);

	}
	
	
	
	const clockTicking = () => {
		const minutes = getTickingTime()
		const setMinute = updateMinute();

		if (minutes === 0 && seconds === 0){
			reset()
		}else if (seconds == 0){
			setMinute((minute) => minute-1);
			setSeconds(59)
		}else{
			setSeconds((seconds) => seconds-1)
		}
	}

	useEffect(() => {
	window.onbeforeunload = () => {
		return consumedSecond ? "Show waring" : null
	};

		const Timer = setInterval(() => {
			if (ticking) {
				clockTicking();
				setConsumedSecond(value => value + 1)
			}
		}, 1000)


		return () => {
			clearInterval(Timer);
		}
	}, [seconds,pomodoro,shortBreak,longBreak, ticking])


  return (
		<div className="bg-gray-900 min-h-screen font-inter">
			<div className="max-w-2xl min-h-screen mx-auto">
				<Navigation />
				<Timer
					stage={stage}
					switchStage={switchStage}
					getTickingTime={getTickingTime}
					seconds={seconds}
					setTicking={setTicking}
					ticking={ticking}
				/>
				<About />
				<Alarm />
			</div>
		</div>
	);
}


