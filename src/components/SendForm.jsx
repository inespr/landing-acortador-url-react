import { useState, useEffect } from "react";
import { Button } from "./Button";
import { MemoSearch } from "./MemoSearch";

export function SendForm(props) {
    const [url, setUrl] = useState("");
    const [datosURL, setDatosURL] = useState({});
    // const [datosLS, setDatosLS] = useState("");
    let info = [];
    //funcion manegar localstorage
    //comprobacion datos?.url
    function localStorageSave(){
        var json = {...info} 
        localStorage.setItem('Info: ', JSON.stringify(json))
    }

    function localStorageGet(){
        let datosLS  = JSON.parse(localStorage.getItem("Info"));
        console.log('Datos en LS:', datosLS)
    }

    function shortenURL(evento) {
        evento.preventDefault();
        setUrl(evento.target.url.value);
        if(validarURL(url) && url){
            
            info.push(datosURL?.result?.full_short_link, url);
            console.log('Array: ', info)
            localStorageSave();
            localStorageGet()
        }//añadir mensaje de error
    }

    function validarURL(url) {
        try {
            new URL(url);
            return true
        } catch (error){
            //añadir mensaje de error
            return false;
        }
    }

    useEffect(() => {
        if(validarURL(url) == true ){
            console.log('url:', url);
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(res => res.json())
            .then(datos => {
                setDatosURL(datos)
                console.log('Datos URL: ', datos);
            })
        }
    },[url])


    return(
        <>
            <section className="sendform" id="sendform">
                <form onSubmit={shortenURL}>
                    <input type='url' id='url' placeholder='Shorten a link here...' ></input>
                    <Button text='Shorten It!' value='shorten' type='onSubmit' className='button--action' />
                </form>
            </section>
            <section className="memosearchs">
                {/* <MemoSearch/> */}
            </section>
        </>

    )
}