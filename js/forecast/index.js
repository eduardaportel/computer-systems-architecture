const axios = require('axios')
const appid = 'c8d9ac87134223340c58b0c5ad945bde'
const q = 'Itu'
const units = 'metric'
const lang = 'pt_BR'
const cnt = '10'
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;


// axios.get(url)
//     .then((res) =>{
//         console.log(res)
//         return res.data
//     })

//     .then((res) =>{
//         console.log(res)
//         return(res["list"])
//     })
//     .then((res) =>{
//         for(let previsao of res){
//             console.log(`
//                 ${new Date(+previsao.dt * 1000).toLocaleString()},
//                 ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                 ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                 ${previsao.weather[0].description}
//                 `)
//         }
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// console.log(url)

async function getForecast(){
    try{
        res = await axios.get(url)
        console.log(res)
        forecats_list = res.data.list
        for (let previsao of forecats_list){
            console.log(`
                ${new Date(+previsao.dt * 1000).toLocaleString()},
                ${'Min: ' + previsao.main.temp_min}\u00B0C,
                ${'Max: ' + previsao.main.temp_max}\u00B0C,
                ${previsao.weather[0].description}
                `) 
            }
    } catch (err){
        console.log('Deu erro.')
    }
}
getForecast()