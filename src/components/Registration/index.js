import styles from './style.module.css'
import {Images} from "../../assets/Images";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
// import {Link } from "react-router-dom"



function Registration()
{
    const [name, setName] = useState("")
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [message , setMessage] = useState()
    const [status, setStatus] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)
    const [navi,setNavi] = useState(true)
    const navigate = useNavigate()
   

    
    function validate3()
    {
        setNavi(false)
        //  const pattern3 = new RegExp(/^([a-z A-Z ]+) ([a-z A-Z ]+) ([a-z A-Z]+)$/);

         if(name !== "")
            {
                setStatus3(false)
                console.log("correct NAme")  
            }
            else{
                setStatus3(true)
                console.log("wrong Name")
            }

    }


    function validate2()
    {
        setNavi(false)
         const pattern2 = new RegExp(/^([a-z A-Z 0-9\._]+)@([a-z A-Z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/);

         if(pattern2.test(email))
            {
                setStatus2(false)
                console.log("correct Email")  
            }
            else{
                setStatus2(true)
                console.log("wrong Email")
            }

    }

    function validate()
    {
        setNavi(false)
        const pattern = new RegExp(/^[6-9]\d{9}$/);
        

             if(pattern.test(contact))
                {
                    setStatus(false)
                    console.log("correct number")  
                }
                else{
                    setStatus(true)
                    console.log("wrong No.")
                }
      }

    
    function submitForm()
    {
        if(navi) return

        if(status3) return

        if(status2) return

        if(status) return 

     
        console.log(status)
       
                    const data={name,email,contact,message}
                    console.log(name,email,contact,message)
            
                    fetch("https://lemonapp-jbdd.onrender.com/", {
                        method : "POST" ,
                        headers: {
                            "Accept" : "application/json",
                            "Content-Type" : "application/json"
                        },
                        body : JSON.stringify(data)
                    }).then((result)=>{
                        result.json().then((data1)=>{
                            console.log(data1)
                           
                        })
                    })  
                  
                        navigate("/confirmation")
                    
    }

    useEffect(()=>{

    },[status])

    return(
        <div className= {styles.wrapper}>
            <div className= {styles.innerwrapper}>
                <div className= {styles.offer}>
                    <div className= {styles.trophy}>
                    <img src = {Images.Image9} className={styles.trophyImage} alt = "No image"/> 
                    </div>
                     <img src = {Images.Image10} alt = "No image"/> 

                </div>
                <div className= {styles.inputField}>

                   
                     <div className={styles.inputdiv}>
                        <input type = "text" placeholder = "Full Name"  onBlur={validate3} onChange={(e)=> setName(e.target.value)}  className = {`${styles.abc} ${status3?styles.contacterror:''}`}/><br></br>
                        {status3 && <p className= {styles.invalid3}> Name is Empty . </p>}  

                        <input type="text" placeholder="Email" id="email"  onBlur={validate2} onChange={(e)=> setEmail(e.target.value)} className = {`${styles.abc} ${status2?styles.contacterror:''}`}/><br></br>

                        {status2 && <p className= {styles.invalid2}> Email is invalid . </p>}  

                        <input type="number" placeholder="Contact No." id="mob" onBlur={validate}  onChange={(e)=> setContact(1*e.target.value)} className = {`${styles.abc} ${status?styles.contacterror:''}`}  /><br></br>

                        {status && <p className= {styles.invalid}> Contact is invalid . </p>}  

                        <textarea type="text" placeholder="Message" id="msg"  onChange={(e)=> setMessage(e.target.value)}  className ={styles.msgdiv}/><br></br>
                        </div>

                        <div className={styles.submitshift}>

                         <button onClick={submitForm} className={styles.submitdiv} > Submit   </button>  
                        </div>



                </div>

            
            </div>

        </div>
    )
}

export default Registration