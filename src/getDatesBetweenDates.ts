export const getDatesBetweenDates = (startDate: { clone: () => any; }, endDate: any) => {
    let now = startDate.clone(),
      dates = []
  
    while (now.isSameOrBefore(endDate)) {
      dates.push(now.clone())
      now.add(1, "d")
    }
    return dates
  };
  
