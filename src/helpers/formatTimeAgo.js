export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondsPast = Math.floor((now - date) / 1000);

    if (secondsPast < 60) {
        return `${secondsPast}с назад`;
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)}м назад`;
    }
    if (secondsPast <= 86400) {
        return `${Math.floor(secondsPast / 3600)}ч назад`;
    }
    if (secondsPast < 31536000) {
        return `${Math.floor(secondsPast / 86400)}д назад`;
    }
    return `${Math.floor(secondsPast / 31536000)}г назад`;
};
