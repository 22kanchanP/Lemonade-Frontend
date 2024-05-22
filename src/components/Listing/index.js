import styles from './style.module.css'

import { useEffect, useState } from "react"

function Listing()
{
   
    const [data1,setData]=useState([])
    useEffect(()=>
    {
    fetch("https://lemonapp-jbdd.onrender.com/").then((result)=>{
    // console.log(result)
    result.json().then((data)=>
    {
                //console.log(data)
                setData(data)
             })
    })
    },[])
    
        console.log(data1)
    
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.outerwrapper}>
           
                <div className={styles.innerwrapper}>
                
                <table classname = {styles.tablediv} >
              <tbody>
                   
                  <th  className={styles.waitlistheading}>  Waitlist Database</th>
                   
                    <tr className={styles.tableheading}>
                        {/* <td> S.No.</td> */}
                        <th> S.No.</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th> Contact</th>
                        <th> Message</th>
                       
                    </tr>
                    {
                        data1.map((item ,index) => 
                            <tr>
                            <td> {index +1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.message}</td>
                            </tr>
                         )
                    }
                </tbody>
              </table>

            </div>
            </div>
        </div>
    )
}

export default Listing