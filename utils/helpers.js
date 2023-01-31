module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY to use it for post date
    return date.toLocaleDateString();
  },
};
