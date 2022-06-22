const moment = require("moment");

const getMonthDateRange = () => {
  const d = moment.now();
  const startDate = moment(d).startOf("month").utc();
  const endDate = moment(d).endOf("month").utc();

  return {
    startDate,
    endDate,
  };
};

module.exports = {
  getMonthDateRange,
};
