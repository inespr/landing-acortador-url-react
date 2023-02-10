import { ButtonAction } from "./ButtonAction";

export function SendForm(props) {
    return(
        <section className="sendform">
            <form>
                <input type={'text'} placeholder={'Shorten a link here...'}></input>
                <ButtonAction type={'submit'} text={'Shorten It!'}/>
            </form>
        </section>
    )
}