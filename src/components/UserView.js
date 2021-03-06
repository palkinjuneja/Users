import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import styles from './UserView.module.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import NavBar from './NavBar';
import FooterModule from './FooterModule'

function UserView() {
    const {userId} = useParams();
    const [userData,setUserData]= useState({});
    const [userSkill,setuserSkill]=useState("");
    console.log(userId);

    useEffect(()=>{
        const getRequest = "http://localhost:9000/getUsers/userById?id="+userId;
        axios.get(getRequest).then(res=>{
            setUserData(res.data);
            console.log(res.data.skill);
            setuserSkill(res.data.skill);
        }).catch(err=>{
            console.log("error:",{err});
            return (
            <div>{err}</div>
            )
        })
    },[])
    return (
        <div className={styles.userView__Page}>
           <NavBar middleText="User Profile"/>
           <div className={styles.userView__Banner}>
           </div>
           <div className={styles.userView__mainDiv}>
               <div className={styles.userView__basicInfo}>
                   <div className={styles.userView__basicInfoImage}>
                   <img alt="" className={styles.userView__imageRectabgle} src="https://static.overlay-tech.com/assets/2ec1cdf0-ee25-4b06-a775-86ba85ff4196.png"/>
                   </div>
                   <div className={styles.userView__basicInfoText}>
                   <div className={styles.userView__basicInfoText__name}>{userData.name}</div>
                   <div className={styles.userView___basicInfoText__role}>{userData.role}</div>
                   <div className={styles.userView___basicInfoText__email}><p>{userData.email}</p></div>
                   <div className ={styles.userView__socialLinks}>
                       <div className={styles.userView__Link}>
                          <a target="_blank" href= {userData.linkedin}><LinkedInIcon/></a>
                       </div>
                       <div className={styles.userView__Link}>{userData.github ? <a target="_blank" href= {userData.github}><GitHubIcon/></a>:<p></p>}</div>
                       <div className={styles.userView__Link}>{userData.portfolio ? <a target="_blank" href= {userData.portfolio}><LinkIcon/></a>:<p></p>} </div>
                   </div>
                   </div>
                </div>
               <div className={styles.userView__experience}>
                   <p className={styles.userView__experience__headings}>Experience</p>
                   <p className={styles.userView__experience__text}>{userData.overview}</p>
                   <p className={styles.userView__experience__headings}>Skills</p>
                   {userSkill ? <div>{userSkill.map((eachSkill)=>(<p className={styles.userView__experience__text}>{userSkill.indexOf(eachSkill)+1}.   {eachSkill}</p>))}
                    {console.log(userSkill.indexOf("java")+1)}
                   </div>:<p></p>}
               </div>
               <div className={styles.userView__availability}><EventAvailableIcon/> <p className={styles.userView__availability__text}> &nbsp;&nbsp;{userData.availability} Hrs per week</p></div>
           </div>
           <FooterModule/>
        </div>
    )
}

export default UserView
