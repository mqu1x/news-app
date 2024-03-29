export const formatDate = (date) => {
    const options = { month: 'long', weekday: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('ru', options);
};
