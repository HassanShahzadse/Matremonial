


// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0

// ** Checks if the passed date is today
const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }


// ** Returns short month of passed date
export const formatDateToMonthShort = (value: any, toTimeForCurrentDay = true) => {
    const date = new Date(value)
    let formatting: any = { month: 'short', day: 'numeric' }
  
    if (toTimeForCurrentDay && isToday(date)) {
      formatting = { hour: 'numeric', minute: 'numeric' }
    }
  
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }