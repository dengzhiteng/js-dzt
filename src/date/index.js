const dayjs = require("dayjs");
const isoWeek = require("dayjs/plugin/isoWeek");
const dayOfYear = require("dayjs/plugin/dayOfYear");
dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);

/***
 * 对日期进行格式化
 * dateString 日期
 * formats  格式
 */
export function dateFormat(dateString, formats) {
  return dayjs(dateString).format(formats || "YYYY-MM-DD");
}

/***
 * 当前日期信息
 */
export function currentDates() {
  return {
    timestamp: dayjs().valueOf(), // 单位是毫秒
    date: dayjs().format("YYYY-MM-DD"), // 日期
    year: dayjs().year(), // 获取年份
    month: dayjs().month() + 1, // 获取月份
    day: dayjs().date(), //获取月份里的日期
    weekday: dayjs().isoWeekday(), // 周几
    dayOfYear: dayjs().dayOfYear(), //年份里第几天。
  };
}

/***
 * 计算两个日期之间的天数
 * 返回number day
 */
export function daysBetween(date1, date2) {
  const aDate = new Date(date1);
  const bDate = new Date(date2);
  const aDay = 24 * 60 * 60 * 1000;
  const diffDay = (bDate - aDate) / aDay;
  return diffDay;
}

/***
 * 比较两个日期的大小
 * date1大 true
 * date2大  false
 * @return {boolean}
 */
export function compareDate(date1, date2) {
  const oDate1 = new Date(date1);
  const oDate2 = new Date(date2);
  if (oDate1.getTime() > oDate2.getTime()) {
    return true;
  } else {
    return false;
  }
}
