import { Button } from "./Button";

export function MemoSearch(props) {
    return(
        <div className="memoSearch">
            <p className="url">
            https://pgt-hiberus.notion.site/Pr-3-Landing-acortador-URLs-8d4d1d21071e420a8c7a152ac709661f
            </p>
            <div className="">
                <p className="urlShort">

                </p>
                <Button value='copy' type='submit' className='button--action' text="Copy"/>
            </div>
        </div>
    )
}