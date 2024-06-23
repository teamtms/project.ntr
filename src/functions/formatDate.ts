export const formatDate = (date: string): string => {
	const dateObj = new Date(date)

	const month = dateObj.getMonth() + 1 <= 9 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1

	return `${dateObj.getDay() <= 9 ? '0' + dateObj.getDay() : dateObj.getDay()}.${month}.${dateObj.getFullYear()}`
}
