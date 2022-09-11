import moment from 'moment'
import { chunk } from 'lodash'

import { getDatesBetweenDates } from './getDatesBetweenDates'

interface EstimatedDateOptions {
    day: string,
    sessions:number,
    holidays:Array<String>,
}

function estimatedDates({ day, sessions, holidays}:EstimatedDateOptions){
  /**
   * Recovery from the previous year
   * to the current to calculate the start date of the slots
   */
   const start = moment(moment().subtract(1, "y").year().toString() + "-09-02");
   
   /**
    * Recovery from the newt year
    * to the current to calculate the end date of the slots
    */
   const end = moment(moment().add(1, "y").year().toString() + "-06-30");
   
  /**
   * A date table without the summer holidays,
   * and containing only the selected day
   */
   const dateList = getDatesBetweenDates(start, end)
   .filter((c) => !holidays.includes(moment(c).format('MM')))
   .filter((c) => c.format("dddd") === day);

 /**
  * Total number of days available divided
  * by the number of slots desired
  */
 const repetitions = Math.round(dateList.length / sessions);


 /**
  * Dividing the array of all dates into several arrays
  */
 return chunk(dateList, repetitions).map((e) => ({
   date: e[0],
   isBefore: e[0].isBefore(moment())
 })); 
}

export default estimatedDates