import axios from "axios";
import React from "react";
import { useState } from "react";
import { types } from "../../../types/Types";

export const RegresionPolinomial = () => {
  
    const [dependiente, setDependiente] = useState("");
    const [independiente, setIndependiente] = useState("");
    const [degree, setDegree] = useState("")
    const [path_csv, setpath_csv] = useState();
    const [image64, setImage64] = useState("")

    const handleCalcular =   (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", "name");
        formData.append("archivo", path_csv);
        
         axios.post(types.apiurl+"uploadfile", formData)
        .then(data =>{
            
            axios
            .post(types.apiurl + "regresionpolinomial", {
                dependiente,
                independiente,
                degree,
                "path_csv" : path_csv.name
                
            })
            .then((respData) => {
                setImage64(respData.data)
            });
        })
    };

    return (
        <div className="pb-5 mb-5">
            <h1>Regresion Polinomial</h1>
            <hr />
            
            <form>
                <div className="form-group">
                    <label>Dependiente Y:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={dependiente}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setDependiente(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Independiente X:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={independiente}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setIndependiente(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Degree:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="referencia"
                        value={degree}
                        //placeholder="Ingrese su referencia"
                        onChange={(event) => {
                            setDegree(event.target.value);
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
                <img src={`data:image/png;base64,${image64}`} />
            </form>
        </div>
    );
}
