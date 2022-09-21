const c = require('./colors');
const e = require('./emotes');

module.exports.loading = {
    description: e.pending + 'Loading...',
    color: c.pending,
}

module.exports.cooldown = (duration) => {
    return {
        description: e.pending + `You are on a \`${duration}\` cooldown.`,
        color: c.pending
    }
}

module.exports.fail = (desc) => {
    return {
        description: e.fail + desc,
        color: c.fail
    }
}

module.exports.error = {
    description: e.error + 'Oh no, something went wrong..',
    color: c.error
}

module.exports.done = (desc) => {
    return {
        description: e.done + desc,
        color: c.done
    }
}