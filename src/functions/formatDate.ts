export const formatDate = (date: string): string => {
	return `${date[6]}${date[7]}.${date[4]}${date[5]}.${date[0]}${date[1]}${date[2]}${date[3]}`
}
