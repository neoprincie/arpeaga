
const convertToHhMmSs = (s: number): string => {
    let seconds = s
    const hours = Math.trunc(seconds / 3600)
    seconds = seconds % 3600
    const minutes = Math.trunc(seconds / 60)
    seconds = seconds % 60

    return hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }) 
    + ":" 
    + minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        }) 
    + ":" 
    + seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
        })
}

export { convertToHhMmSs }