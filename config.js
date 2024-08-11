//UBAH UBAH DISINI BRO JANGAN LUPA SUBREK YT DELTA TECH//
//NOTE : cara menjadi premium silahkan Pergi ke file; all/database/premium.json
//NOTE : cara menjadi publik owner silahkan Pergi ke file; all/database/owner.json

require("./all/module")
global.owner = "258864114607" 
global.namaCreator = "GHOST MODZ" 
global.autoJoin = false
global.antilink = true
global.versisc = '1.0' 
global.codeInvite = ""
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "naruto bot" 
global.author = "GHOST MODZ" 
global.jumlah = "5" 
global.namabot = "Naruto MD" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
