import { useState } from "react";
import { Button } from "./Button";

export function SendForm(props) {
    const [url, setUrl] = useState();
    console.log(url);

    function ShortUrl() {
        fetch('https://api.shrtco.de/v2/shorten?url=https://www.google.com/search?q=flex+child+different+height&rlz=1C1GCEU_enES1040ES1040&ei=bGbrY8bHKbOCi-gPlNmZyA0&oq=flex+child+diff+height&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMggIIRCgARDDBDoKCAAQRxDWBBCwAzoFCAAQogQ6BggAEAcQHjoJCAAQBxAeEPEEOggIABAFEAcQHjoJCAAQCBAeEPEEOgsIABAIEAcQHhDxBDoFCAAQgAQ6CAgAEAgQBxAeOgoIIRCgARDDBBAKSgQIQRgASgQIRhgAUNchWP9QYIJcaAZwAHgAgAGOAYgBjA2SAQQwLjE0mAEAoAEByAEIwAEB&sclient=gws-wiz-serp&safe=active&ssui=on')
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })

    }
    return(
        <section className="sendform" id="sendform">
            <form>
                <input type={'text'} placeholder={'Shorten a link here...'}></input>
                <Button text='Shorten It!' value='shorten' type='button' className='button--action' onClick={event => setUrl(event.target.value)}/>
            </form>
        </section>
    )
}