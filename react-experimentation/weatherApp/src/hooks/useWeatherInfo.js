import { useEffect, useState } from "react";

const useWeatherInfo = (city) => {

    const apiKey = import.meta.env.VITE_API_KEY

    const [weatherData, setWeatherData] = useState(false)

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    setWeatherData(false)
                    throw new Error("Invalid City");
                }
            })
            .then((cityWeather) => {
                setWeatherData(cityWeather)
            })
    }, [city]);

    return weatherData
};

export default useWeatherInfo;
