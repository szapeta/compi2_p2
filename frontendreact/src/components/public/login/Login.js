import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/Types";

export const Login = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const [formusername, setFormusername] = useState("");
    const [formpass, setFormpass] = useState("");

    const handleLogin = async (e) => {

        const lastPath = localStorage.getItem("lastPath") || "/";

        let resp;
        if(types.isProd){
            resp = await axios.post(types.apiurl + "/usuarios/login", {
                formusername,
                formpass,
            });
        }else{
            dispatch({
                type: types.login,
                payload: {
                    name: "sfelipe",
                    user: "sfelipe",
                    rol: types.rolAdmin,
                    iduser: "1"                
                },
            });
            history.replace(lastPath);
            return
        }
    
        if (resp.data.idUsuario > 0) {
            let resultUsuario = resp.data;

            dispatch({
                type: types.login,
                payload: {
                    rol: types.rolAdmin,
                    user: resultUsuario.user,
                    iduser: resultUsuario.idUsuario
                },
            });

            history.replace(lastPath);
        } else {
            alert("Error en credenciales");
        }
    };
    
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <div className="form-group">
                <label>Username</label>
                <input
                    type="ingrese su nombre de usuario"
                    autoComplete="off"
                    className="form-control"
                    id="name"
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
                    onChange={(event) => {
                        setFormpass(event.target.value);
                    }}
                />
            </div>
            <button className="btn btn-lg btn-block btn-pink-sherbet fondo-red-crayola" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};
