const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wesongaspencer783@gmail.com"
global.location="Nairobi,Kenya."


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


global.devs = "254703278903" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_48_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkcytUdG80bXdSeXE2QWgrRzl1OEp2aWMwRGZyZzN5eWZDajJKUnlsU0JJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyTEN5dXRmRVFKeXdVOVRSdE12VHJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVhYzVkODY4LTE0NDAtNGY1Ny05MmQwLTc5NGUyZGU0ZGJiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICA4MSxcbiAgICAgIDMwLFxuICAgICAgMjQsXG4gICAgICAxMDksXG4gICAgICAxNDcsXG4gICAgICAxNzAsXG4gICAgICAxMyxcbiAgICAgIDE2NixcbiAgICAgIDE1NCxcbiAgICAgIDQ3LFxuICAgICAgNjUsXG4gICAgICA2MixcbiAgICAgIDU2LFxuICAgICAgMjM3LFxuICAgICAgMTM4LFxuICAgICAgMTExLFxuICAgICAgMjEyLFxuICAgICAgMTA2LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDIyLFxuICAgICAgMTU4LFxuICAgICAgMTI1LFxuICAgICAgMTY0LFxuICAgICAgMCxcbiAgICAgIDE0MSxcbiAgICAgIDg5LFxuICAgICAgMjE3LFxuICAgICAgMTY1LFxuICAgICAgMTA5LFxuICAgICAgMTcwLFxuICAgICAgMTA5LFxuICAgICAgMSxcbiAgICAgIDI1LFxuICAgICAgNSxcbiAgICAgIDExMixcbiAgICAgIDExNCxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGR1lKWktRVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAzMjc4OTAzOjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjkxNjU5Njk1Njc5Njc6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNJaWV3REVPV081YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVYUtmUmhYeWZQeVU4U1FPd1dOWDVLMjd0c0lCRStQVFRaR3pGNzg5V3o0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5XeDNIM21GdEtCVjJFaGRVTE40TTlxSVFDSGhUZm5oRmQwVU1KQWRsZmJVNnNjTlZaTHJIVE00dWN5NDc1YlJ5ZjhvNTV0YjhCUFEzTEpmUHJHRUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxUb0ZCYkxtdlZWL1oxVW9RNWFJZElyODhPMlQxYmFmaUVCeHhIRG9xZ0JNRzN0Ukx2OVgwajF0RFc4YU0xQ0hydFFMTjZhQ1BpYnlwT1FoV2hueWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMzI3ODkwMzo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMyMTMyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURDM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREMzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWFEaTJQa2Zja21PTFpNOVlYNFFyZ1VNZnpvQXRPcDZRaGdJandnU3phWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDMxOTQ3MzMxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMzIxMjQ2ODA5XCJ9Igp9"  // PUT your SESSION_ID 


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
