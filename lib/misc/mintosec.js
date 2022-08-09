module.exports = (str) => {
    var min = str.split(":")[0]; // minutes
    var sec = str.split(":")[1]; // seconds

    min = Number(min)*60; // converted to seconds
    sec = Number(sec);
    return min + sec;
}