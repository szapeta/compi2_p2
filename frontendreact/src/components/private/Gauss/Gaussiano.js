import axios from "axios";
import React from "react";
import { useState } from "react";
import { types } from "../../../types/Types";

export const Gaussiano = () => {
    
    const [param, setParam] = useState("")
    const [ini_pred, setIni_pred] = useState(10)
    const [fin_pred, setFin_pred] = useState(12)
    const [ini_predecip, setIni_predecip] = useState(1)
    const [num_state, setNum_state] = useState(17)
    const [path_csv, setpath_csv] = useState();
    const [valorPredecido, setValorPredecido] = useState("")

    const handleCalcular =   (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", "name");
        formData.append("archivo", path_csv);
        
         axios.post(types.apiurl+"uploadfile", formData)
        .then(data =>{
            
            axios
            .post(types.apiurl + "classgaussiano", {
                param,
                ini_pred,
                fin_pred,
                ini_predecip,
                num_state,
                "path_csv" : path_csv.name
                
            })
            .then((respData) => {
                console.log(respData)
                setValorPredecido(respData.data)
            });
        })
    };

    return (
        <div className="pb-5 mb-5">
            <h1>Regresion Polinomial</h1>
            <hr />
            
            <form>
            <div className="form-group">
                    <label>Parametro:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={param}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setParam(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>rango inicio predictorias:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={ini_pred}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setIni_pred(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>rango fin predictorias:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={fin_pred}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setFin_pred(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>columna a predecir:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={ini_predecip}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setIni_predecip(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>numero de estado:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={num_state}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setNum_state(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Archivo:</label>
                    <div className="form-group">
                        <input
                            className="form-control-file"
                            id="fileSelector"
                            name="csv_file"
                            type="file"
                            onChange={(e) => setpath_csv(e.target.files[0])}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-lg btn-block btn-pink-sherbet fondo-red-crayola"
                    onClick={handleCalcular}
                >
                    Calcular
                </button>
                <br/>
                <br/>
                <h1>Valor Predecido</h1>
                <h2>{valorPredecido}</h2>
            <hr />
            </form>
        </div>
    );
}
