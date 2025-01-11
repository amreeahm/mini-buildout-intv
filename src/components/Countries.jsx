import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);

    const getCountryData = async () => {
        try{const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const dataR = await res.json();
        setData(dataR);
        }
        catch(error){
            console.error("Error fetching data: ",error)
        }
    }

    useEffect(() => {
        getCountryData();
    }, [])

    console.log(data)

    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"10px"
        }}>
            {data.map((count,i) =>
            (
                <Card info={count} key={i} />
            )
            )}

        </div>
    )
}

export default Countries;