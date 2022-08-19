const axios = require('axios');

const latitude = 6.20
const longitude = -75.61

export const testValidation = async () => {
    const valueAPI = await axios.get('https://api.open-meteo.com/v1/forecast', { 
        params: 
            {
                latitude,
                longitude
            },
    })

    console.log(valueAPI)
    return valueAPI;

}


