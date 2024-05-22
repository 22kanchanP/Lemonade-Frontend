import styles from './style.module.css'
import {Images} from "../../assets/Images";

function Header()
{
    return(
        <div className = {styles.wrapper}>
            
               <div className= {styles.outerwrapper}>
                    <div className = {styles.innerwrapper}>
                        <img src = {Images.Image1} className= {styles.headerIcon} alt = "No image"/> 
                        </div>
               </div>

            
        </div>
    )
}

export default Header