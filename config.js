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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlR3R1ArMlRMajNTbk5WOGpobzlrT0ZOaE1jeHhJL2Y4YXN1OU15di94Vms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZ2a1lRNjFHU01ldnpIMFVCdHQ5bUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjZjNmE0YjctMzYzNC00YWYxLTk5YzgtZmVhN2FiMzUwZWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDIzMyxcbiAgICAgIDIxOCxcbiAgICAgIDE4MCxcbiAgICAgIDUzLFxuICAgICAgMTEwLFxuICAgICAgMjEwLFxuICAgICAgMjQwLFxuICAgICAgMTUyLFxuICAgICAgMjM5LFxuICAgICAgMzIsXG4gICAgICAxOTksXG4gICAgICAyMzksXG4gICAgICA4OSxcbiAgICAgIDczLFxuICAgICAgMTM4LFxuICAgICAgMTU5LFxuICAgICAgNzMsXG4gICAgICAxODIsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxMTUsXG4gICAgICAyMDQsXG4gICAgICA4NixcbiAgICAgIDg0LFxuICAgICAgMTYzLFxuICAgICAgOTMsXG4gICAgICAyMzIsXG4gICAgICA3MixcbiAgICAgIDI1MCxcbiAgICAgIDExNyxcbiAgICAgIDg5LFxuICAgICAgNzksXG4gICAgICAxNDgsXG4gICAgICAxOTMsXG4gICAgICAzMSxcbiAgICAgIDEwOSxcbiAgICAgIDczLFxuICAgICAgMjIxLFxuICAgICAgMjE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVWOFkxV0FRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDMyNzg5MDM6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2OTE2NTk2OTU2Nzk2Nzo2N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzcGVuY2VyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9JaWV3REVMeUo1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVYUtmUmhYeWZQeVU4U1FPd1dOWDVLMjd0c0lCRStQVFRaR3pGNzg5V3o0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJhNmJKZWVlTDdqL2hpUHozREdKeVdRVSs2bFZ1STJubFpXVUhwS1hCdjZNR05lUy85UnJzblRVYVY5UFExL0RJU21rRDRadnp3YTAwZTFOWmpseUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVDODI4WXRGMXpWUkczVndkemVUV1djaVZoMy9KMTRYRUpPaThQZ3BaYkorWlJRNlIreFhRVTNkNlZ4OW5Fd05yUjJVd3l2VUhnMlBCcmRMWkFhVUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMzI3ODkwMzo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMyMDY0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURDMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREMyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjMvUGxrZU1HV0VTbXdoUzdnTUxqMTVQTnZRZUNmdGpwQUVYNG4xTWw1Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDMxOTQ3MzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMjA2NDU2NTlcIn0iCn0="  // PUT your SESSION_ID 


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
