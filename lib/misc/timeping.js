module.exports = {
    msgping (a, b) {
        var c = Number(a.toString().slice(0, -1));
        var d = Number(b.toString().slice(0, -1));
        var e = d - c;
        return e.toString().padStart(5, ' ') + 'ms';
    },
    wsping (a) {
        return a.toString().padStart(5, ' ') + 'ms';
    }
}