function isMobileDevice() {
    return typeof window.orientation !== 'undefined';
}

function getIdade() {
    const birthday = new Date('1995-09-03');
    return (new Number((new Date().getTime() - birthday.getTime()) / 31536000000)).toFixed(0);
}