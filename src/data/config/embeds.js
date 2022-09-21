const c = require('./colors');
const e = require('./emotes');

module.exports.loading = {
    embeds: [
        {
            description: e.pending + 'Loading...',
            color: c.pending,
        }
    ]
}

module.exports.cooldown = (duration) => {
    return {
        embeds: [
            {
                description: e.pending + `You are on a \`${duration}\` cooldown.`,
                color: c.pending
            }
        ]
    }
}

module.exports.fail = (desc) => {
    return {
        embeds: [
            {
                description: e.fail + desc,
                color: c.fail
            }
        ]
    }
}

module.exports.error = {
    embeds: [
        {
            description: e.error + 'Oh no, something went wrong..',
            color: c.error
        }
    ]
}

module.exports.done = (desc) => {
    return {
        embeds: [
            {
                description: e.done + desc,
                color: c.done
            }
        ]
    }
}