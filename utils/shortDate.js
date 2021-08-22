export default (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, { day: '2-digit', month: 'long', year: 'numeric' })
}
