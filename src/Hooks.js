// React hook created by https://github.com/spaciecat/react-hooks-series/blob/master/src/useKey.js

import { useState, useEffect } from "react"


export function useKey(key) {
	const [pressed, setPressed] = useState(false)

	const match = event => key.toLowerCase() == event.key.toLowerCase()

	const onDown = event => {
		if (match(event)) setPressed(true)
	}

	const onUp = event => {
		if (match(event)) setPressed(false)
	}

	useEffect(() => {
		window.addEventListener("keydown", onDown)
		window.addEventListener("keyup", onUp)
		return () => {
			window.removeEventListener("keydown", onDown)
			window.removeEventListener("keyup", onUp)
		}
	}, [key])

	return pressed
}



