const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254703278903";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWx6bXQyaC8vaitiT01ORGxFWGlPWDdWdEtZZFZ0SFJhMlh4N0hwT1BkYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRkVMMF9ETkVTejZ6U3JTenlBNnpMZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZTMzMDZkZS1iYWU1LTRkMDctODcwMy1kMjRkNDNhNTgzYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgNTksXG4gICAgICAyNTEsXG4gICAgICAyNDQsXG4gICAgICAxNTMsXG4gICAgICA4OSxcbiAgICAgIDExNixcbiAgICAgIDY1LFxuICAgICAgNjYsXG4gICAgICA5NSxcbiAgICAgIDUzLFxuICAgICAgNzksXG4gICAgICAyMzIsXG4gICAgICAyMDgsXG4gICAgICAxMDQsXG4gICAgICAxNDMsXG4gICAgICA5MixcbiAgICAgIDc0LFxuICAgICAgMTI4LFxuICAgICAgMjIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE2NixcbiAgICAgIDEzMixcbiAgICAgIDE0MCxcbiAgICAgIDcwLFxuICAgICAgMTgyLFxuICAgICAgMTg3LFxuICAgICAgMjI0LFxuICAgICAgMTE0LFxuICAgICAgMTkyLFxuICAgICAgMjIxLFxuICAgICAgNDUsXG4gICAgICAyMTAsXG4gICAgICAxMDMsXG4gICAgICAxOTAsXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDE0MyxcbiAgICAgIDE2NCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkUxU1JTMkhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDMyNzg5MDM6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2OTE2NTk2OTU2Nzk2Nzo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS0lpZXdERVBDMDNyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVhS2ZSaFh5ZlB5VThTUU93V05YNUsyN3RzSUJFK1BUVFpHekY3ODlXejQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQlU2ZTJOOEJQMVNPekRmeTJHUjVJTHhCa3VWYTMrOVg0WFdISGdhSzVLbklTS1A4ZVBadW5QRkx4VGUzeldhRXUrYVo0eUVrUDV6a0V1N1NCayswQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkgrMml6czEvVW94d1lTMVZJanBkTDRhVzQ5UEtjdmkwSTk1WWEzSmR5MkVncWxKMTVpRjloelJGaGhXbjZVdm9LSzNacFgzT001dG84OHhSekJ6RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzAzMjc4OTAzOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjExNTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlVQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyQis4V0h5SCtTcGF0OVJNWjRIM051QkkyOU5uaHNMZG5idlBJV1V5dGJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMzE5NDczMjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
