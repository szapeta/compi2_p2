import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/Types";
import ImageUploader from "react-images-upload";
import { v4 as uuid } from "uuid";

export const Registro = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const [isError, setIsError] = useState("");
    const [formname, setFormname] = useState("");
    const [formlastname, setFormlastname] = useState("");
    const [formusername, setFormusername] = useState("");
    const [formpass, setFormpass] = useState("");
    const [formpassxtwo, setFormpassxtwo] = useState("");

    const lastPath = localStorage.getItem("lastPath") || "/";

    const handleRegistro = async (e) => {
        e.preventDefault();
        if (formpass == formpassxtwo) {
            setIsError("");

            axios
                .post(types.apiurl + "/usuarios", {
                    formname,
                    formlastname,
                    formusername,
                    formpass,
                })
                .then((rspData) => {
                    let valresp = rspData.data;

                    if (valresp.result== 'OK'){

                        alert(valresp.msg)
                        dispatch({
                            type: types.login,
                            payload: {
                                name: formname,
                                user: formusername,
                                rol: types.rolAdmin,
                                iduser: valresp.iduser
                            },
                        });
    
                        history.replace(lastPath);

                    }else{
                        alert(valresp.msg)
                    }
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1>Registro</h1>
            <hr />
            <form autoComplete="off">
                <div className="form-group">
                    <label>Nombres</label>
                    <input
                        type="ingrese su nombre"
                        autoComplete="off"
                        className="form-control"
                        name="name"
                        id="name"
                        value={formname}
                        onChange={(event) => {
                            setFormname(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input
                        type="ingrese sus apellidos"
                        autoComplete="off"
                        className="form-control"
                        name="lastname"
                        id="lastname"
                        value={formlastname}
                        onChange={(event) => {
                            setFormlastname(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Username o email</label>
                    <input
                        type="ingrese su nombre"
                        autoComplete="off"
                        className="form-control"
                        name="user"
                        id="user"
                        value={formusername}
                        onChange={(event) => {
                            setFormusername(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pass"
                        value={formpass}
                        onChange={(event) => {
                            setFormpass(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Password</label>
                    <input
                        value={formpassxtwo}
                        onChange={(event) => {
                            setFormpassxtwo(event.target.value);
                        }}
                        type="password"
                        className="form-control"
                        id="passxtwo"
                    />
                </div>
                <button
                    className="btn btn-lg btn-block btn-pink-sherbet fondo-red-crayola"
                    onClick={handleRegistro}
                >
                    Registrarse
                </button>
            </form>

            <div
                style={{
                    position: "absolute",
                    textAlign: "center",
                    paddingTop: 20,
                }}
            >
                {isError}
            </div>
        </div>
    );
};
