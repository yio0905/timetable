// 課表系統前端設定檔案
const CONFIG = {
  title: "臺中市立霧峰農工 115年度暑期&營隊輔導課表查詢系統",
  schoolName: "霧峰農工",
  timetableCsv: "./timetable_wufa.csv",
  homeroomsJson: "./homerooms_wufa.json",
  periodTimes: {
    "1": "08:00 - 08:50",
    "2": "09:10 - 10:00",
    "3": "10:10 - 11:00",
    "4": "11:05 - 11:55",
    "5": "13:00 - 13:50",
    "6": "14:00 - 14:50",
    "7": "15:00 - 15:50"
  }
};
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
