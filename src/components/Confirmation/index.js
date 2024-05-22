import styles from './style.module.css'
import {Images} from "../../assets/Images";
import {Link } from "react-router-dom"




function Confirmation()
{   

    return(
        <div className= {styles.wrapper}>
            <div className= {styles.innerwrapper}>

               <img src = {Images.Image12} className={styles.congratsBox} alt = "No image"/> 

                <h1 className= {styles.headingdiv}> Congratulations !</h1>
                <p className= {styles.textdiv}> You have been added on the waiting list</p>
                
                <Link to = "/listing">
                <button   className= {styles.buttondiv}> Done   </button>
                </Link>
          
            </div>

        </div>
    )
}

export default Confirmation