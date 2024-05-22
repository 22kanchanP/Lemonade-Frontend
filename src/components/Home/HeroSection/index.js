import styles from './style.module.css'
import {Images} from "../../../assets/Images";
import {Link } from "react-router-dom"



function HeroSection()
{
    const arr = [Images.Image4,Images.Image5,Images.Image6,Images.Image7,Images.Image8]

    //Lemonade Frontend

    return(
        <div className = {styles.wrapper}>
            <div className= {styles.outerwrapper}>
                    <div className= {styles.innerwrapper}>
                            <div className= {styles.heroSection}>
                                
                                <div className= {styles.leftSection}>
                                    <div className= {styles.textdiv}>
                                        <div className= {styles.topdiv}>
                                            <h1> They say, when life gives you 
                                                </h1>
                                                <h1>lemons,make lemonade  </h1>
                                        </div>
                                        <div className= {styles.middlediv}>
                                            <p>But your lemonade might taste different from others</p>
                                            <p>considering how well you play with the ingredients.</p>
                                            <br></br>
                                            <br></br>
                                            <p className= { styles.belowmiddlediv}> Let's see how your lemonade tastes ! </p>
                                        </div>
                                
                                        
                                        <div className= {styles.buttonParent}>


                                            <Link to = "/registration">
                                            <button className= {styles.leftbuttton} > Join Now   <img src = {Images.Image2} className= {styles.buttonArrow} alt = "No image"/> 
                                            </button>
                                            
                                            </Link>

                                           
                                       
                                           
                                        </div>
                                
                                    </div>
                                
                            </div>
                                
                                <div className= {styles.rightSection}>
                                
                                <img src = {Images.Image3} className= {styles.juiceGlass} alt = "No image"/> 
                                    
                                </div>
                            
                            </div>

                            <div className= {styles.bottomdiv}>
                                           <div className={styles.bottomText}>
                                            <h1 className= {styles.centertext}> Take the test & know which of the lemon personalities you resonate with </h1>

                                          </div>

                                          <div className= {styles.emojidiv}>
                                            {
                                                arr?.map((item)=>{
                                                    return <div>
                                                            <img src = {item}  alt = "No image"/> 
                                                        </div>
                                                })
                                            }

                                          </div>


                            </div>
                    </div>
            </div>
    </div>

    )
}

export default HeroSection