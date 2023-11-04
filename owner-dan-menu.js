const fs = require('fs')

global.namabot = "𝙓𝘿"
global.namaowner = "𝙁𝙄𝙆𝙊𝙓𝘿"
global.footer_text = "© 𝙓𝘿" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62895630468565']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay Kirim Bukti Transaksi
*_PAYMENT_*
*💶DANA: 083110933360*
*💵GOPAY: 083110933360*
*💴PULSA: 083110933360*

*📌LINK GRUP*
https://chat.whatsapp.com/G6xF4TgR2LwGeMVOEjudjz
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
DI LARANG SPAM
MAU SEWA BOT? HUBUNGI 62895630468565 KETIK OWNER DI CHAT BOT
`
}