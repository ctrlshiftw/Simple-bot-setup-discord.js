const Discord = require('discord.js')
const client = new Discord.Client()
const express = require('express')
const fs = require('fs')
const keepAlive = require('./server.js')
keepAlive();

client.on('ready', () => {
  console.log("I am ready")
  client.user.setUsername('Testbot001')
  client.user.setPresence({ activity: {name:"Your activity"}, status: "online"})
});


client.on('message', message => {
  if(message.content === "ping") {
    message.channel.send("pong")
  }
    if(message.content === "embed test") {
    let embed = new Discord.MessageEmbed()
    .setTitle("Title")
    .setDescription("Description")
    .setFooter("Footer")
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    message.channel.send(embed)
    }
});

client.login(process.env.token)