function FormatDate ({timestamp}) {
    return new Intl.DateTimeFormat('zh-TW', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    }).format(new Date(timestamp * 1000));
}

export default FormatDate;