const baseURL ="https://api.weatherapi.com/v1/current.json?key=419457a424ee4d318b275055250502";


export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};

export const getWeatherDataForLocation = async(lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};