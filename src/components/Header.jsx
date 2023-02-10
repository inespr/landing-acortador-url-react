import {Nav} from "./Nav"
import { ButtonDecoration } from "./ButtonDecoration"
import { ReactComponent as WorkingImage } from '../images/WorkingImage.svg'

export function Header(props){
    return (
    <>
        <Nav/>

        <div className="header">
            <div className="text--header">
                <span>
                    More than just shorter links
                </span>
                <p>
                    Bluild your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <ButtonDecoration text='Get Started'/>
            </div>
            <div className="image--header">
                <WorkingImage/>
            </div>
        </div>
    </>
    )

}
