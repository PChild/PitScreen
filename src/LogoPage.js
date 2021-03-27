import React, { useContext } from "react";
import AppContext from "./AppContext";

export default function LogoPage() {
    const imgContext = useContext(AppContext);
    return (
        <div
            style={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "calc(100% - 64px)",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                paddingBottom: "1em",
                paddingTop: "1em",
                margin: "0",
            }}
        >
            <img
                src={imgContext.logoUrl}
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    height: "auto",
                    width: "auto",
                }}
            ></img>
        </div>
    );
}
