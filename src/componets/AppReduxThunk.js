import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNasaData, getError, fetchNasaData } from "./utilities/ReduxThunkFunkcije";



export default function AppReduxThunk() {
    const data = useSelector(getNasaData);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNasaData());
    },[]);

    if (error) {
        return <div>Couldn't load</div>;
    }

    if (! data){
        return <div>Loading NASA data</div>;
    }

    const {title, url, explanation} = data;
    return(
        <div className="app">
            <h1>NASA picture of the hay</h1>
            <h3>{title}</h3>
            <img src={url} alt={title} width={500} />
            <p>{explanation}</p>
        </div>
    );
}