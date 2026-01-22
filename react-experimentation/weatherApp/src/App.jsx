import { useEffect, useRef, useState } from "react";
import useWeatherInfo from "./hooks/useWeatherInfo";

function App() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState({
        temp: "",
        humidity: "",
        status: "",
        country: "",
    });

    const cityRef = useRef(null);

    const weatherInfo = useWeatherInfo(city);

    const changeData = () => {
        if (weatherInfo) {
            setWeatherData({
                temp: weatherInfo.main.temp,
                humidity: weatherInfo.main.humidity,
                status: weatherInfo.weather[0].main,
                country: weatherInfo.sys.country,
            });
        }
    };

    useEffect(() => {
        if (city && weatherInfo) changeData();
    }, [city, weatherInfo]);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-[url('https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-fixed bg-cover px-[30%] pb-[10%] pt-[5%]">
                <div className="bg-gray-300 w-full h-full opacity-50 flex flex-col items-center justify-center gap-[5%]">
                    <h1 className="text-4xl opacity-100 my-5 font-semibold">
                        Weather App
                    </h1>
                    <div className="w-full h-full flex flex-col flex-wrap items-center justify-baseline gap-15">
                        <div className="flex flex-wrap items-center justify-around gap-10 w-full">
                            <input
                                type="text"
                                className="bg-black w-[40%] text-xl text-white px-4 py-2 outline-blue-500"
                                placeholder="Enter a City"
                                ref={cityRef}
                            />
                            <button
                                className="bg-black text-xl text-white px-4 py-2.5 hover:bg-gray-900"
                                onClick={() => {
                                    if (cityRef.current.value.trim())
                                        setCity(cityRef.current.value);
                                }}
                            >
                                Get Weather
                            </button>
                        </div>
                        {!city ? (
                            <div className="text-3xl font-semibold text-center mx-7">
                                Enter a city name to get the weather information
                            </div>
                        ) : weatherInfo ? (
                            <div className="text-3xl font-semibold">
                                <p>{city}</p>
                                <p>{weatherData.temp}</p>
                                <p>{weatherData.humidity}</p>
                                <p>{weatherData.status}</p>
                                <p>{weatherData.country}</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-red-600 text-3xl font-semibold">
                                    Invalid City,
                                    <br /> Please enter city again
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
