import { useState, useEffect } from "react";
import { Button } from "./Button";
import { MemoSearch } from "./MemoSearch";

export function SendForm(props) {
    const [info, setInfo] = useState([]);
    
    function getLocalStorage(){
        const localStorageInfo = JSON.parse(localStorage.getItem("Info"));
        if(localStorageInfo){
            setInfo(localStorageInfo);
        }
    }

    function guardarDatos(datos){
        const urlInfo = {
            'short':  datos.result?.full_short_link,
            'original':  datos.result?.original_link
        }
        //Guardo cada objeto en un array
        info.push(urlInfo);
        console.log('Array Info:', info);
        //Subo el array a localStorage
        localStorage.setItem('Info', JSON.stringify(info))
    }

    function callApi(evento){
        evento.preventDefault();
        console.log(evento.target.url.value)
        if( validarURL(evento.target.url.value) === true ){
            const url = evento.target.url.value;
            console.log('url:', url);
            //llamo a la api
            fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
                .then(res => res.json())
                //obtengo los datos
                .then(datos => {
                    console.log('Datos URL: ', datos);
                    //Guardo los datos que me interesan en un objeto
                    guardarDatos(datos)
                })  

        }else{
            console.log('introduce una url valida')
        }
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

    useEffect(()=>{
        getLocalStorage()
    },[])

    return(
        <>
            <section className="sendform" id="sendform">
                <form onSubmit={callApi}>
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