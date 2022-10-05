<h1 align="center">Discord.js-V14-handler</h1>
<h3 align="center"><b>A command & event handler for Discord.js V14</b></h3>

<p align="center">
    <a href="https://github.com/discordjs/discord.js/">
        <img src="https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge" alt="discord.js">
    </a>
    <a href="https://github.com/Fyxren/Discord.js-V14-handler/fork">
        <img src="https://img.shields.io/badge/Github-Fork-green?style=for-the-badge" alt="github fork">
    </a>
    <a href="https://github.com/Fyxren/Discord.js-V14-handler/generate">
        <img src="https://img.shields.io/badge/Github-Use%20Template-orange?style=for-the-badge" alt="github generate template">
    </a>
</p>

<br />

The slash/application command handler which I use. It's a modified version from [this handler](https://github.com/Nathaniel-VFX/Discord.js-v14-Command-Handlers), which is made by [Nathaniel-VFX](https://github.com/Nathaniel-VFX). He (or she/something else, idk tbh) did an amazing job.

I did change some stuff like add config files for colors, emojis and default embeds and overal changed it a bit to my needs & way of doing things. I decided to put it on GitHub to make it easy for me to clone the handler for my projects (_which I won't ever finish_). Feel free to use it

I'm planning on adding more branches for e.g MySQL & multiple languages.

## Features
- Commands handler
- Events handler
- Permissions handler (_botPerms: [ ]_ & _userPerms: [ ]_)
- Cooldowns (_Using [Discord.js' Collection](https://discord.js.org/#/docs/collection/main/class/Collection)_)
- Config files
    - Colors (_main, done, fail, error, pending_) | E.g. `client.c.main`
    - Emotes (_done, fail, error, pending_) | E.g. `client.e.done`
    - Prebuilt embeds
        ```js
        /*
            With args: fail(desc) - done(desc) - cooldown(duration)
            You likely never need to use 'cooldown()', but you can change the text
        */
        interaction.reply(client.embeds.done('Target assasinated'));

        // Without args: loading(), error()
        interaction.reply(client.embeds.error());
        ```

## Setting up
- You can use this template by clicking the "Use this template" button. Run `yarn install`, `npm install` or whatever package manager you use. 
- Change the `.env.example` to `.env` and fill in the bot [token](https://discord.com/developers/applications) and bot ID. 
> Guild ID is only needed if you're planning on using the bot in 1 server or for testing purposes. Planning on using it in multiple guilds? Just leave it empty and it should work.

## Contact
<h3>If you need any help, you can contact me through <b><a href="https://socials.fyxren.com/discord">Discord</a></b>.</h3>

<h4>⭐ Feel free to star the repo if you like it and check out <b><a href="https://github.com/Nathaniel-VFX/Discord.js-v14-Command-Handlers">the handler</a></b> from <b><a href="https://github.com/Nathaniel-VFX">Nathaniel</a></b> on which this one is built.</h4>

<a href="https://socials.fyxren.com/discord">
    <img src="https://lanyard.cnrad.dev/api/462914535351779328">
</a>