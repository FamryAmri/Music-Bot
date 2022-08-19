const os = require ('node:os')

module.exports = {
    cpus () {
        var cores = os.cpus ().length || 'Unknown'
        var model = os.cpus ()[0].model;
        var arch = os.arch ();

        if (model=='unknown') model = `${arch.toUpperCase()} CPU`;
        return `${model} × ${cores} core(s)`
    },
    platform () {
        var opsys = os.platform();

        var trueos = {
            'aix': 'IBM OS',
            'darwin': 'MacOS',
            'win32': 'Windows',
            'linux': 'Linux',
            'freebcd': 'FreeBSD',
            'openbcd': 'OpenBSD',
            'android': 'Android',
            'unknown': 'Unknown',
            undefined: 'Unknown'
        }

        return trueos[opsys];
    },
    memory () {
        var total = os.totalmem() / 1024 / 1024 / 1024;
        var free = os.freemem() / 1024 / 1024 / 1024;

        total = total.toString().slice(0, 4) + 'GB';
        free = free.toString().slice(0, 4) + 'GB';
        return `${free} / ${total}`;
    }
}