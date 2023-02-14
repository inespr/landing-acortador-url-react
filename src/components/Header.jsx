import {Nav} from "./Nav"
import { ReactComponent as WorkingImage } from '../images/WorkingImage.svg'
import { Button } from "./Button"

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
                    <Button text='Get Started' value='getstarted' type='button' className='button--decoration' />
                </div>
                <div className="image--header">
                    <WorkingImage/>
                </div>
            </div>
        </>
    )

}
