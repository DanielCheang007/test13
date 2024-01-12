
function sum(arr) {
	return arr.reduce((a, b) => a + b)
}

function avg(arr) {
	return sum(arr) / arr.length
}

function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)]
}

export {
	sum,
	avg,
	random
}