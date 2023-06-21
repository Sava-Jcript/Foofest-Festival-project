
import Image from "next/image";
import styles from "./BandSingleView.module.css";
import NavBar from "../nav-bar/NavBar";

function BandSingleView(props) {


  
  const serverUrl = "https://bittersweet-painted-willow.glitch.me";
   
  
  return (
    <>

      <NavBar></NavBar>
  
      <article className={styles.BandView}>
        <div className="container">
          <div className={styles.top}>
      

            <Image alt="profile" className={styles.BandImage} src={props.logo.includes("http") ? props.logo : `${serverUrl}/logos/${props.logo}`} width="250" height="250" />
          </div>
          <div>
          <h2 className={styles.bandName}>{props.bandName}</h2>
            <section className={styles.description}>
            
              <h2 className={styles.bandGenre}>{props.genre}</h2>
              <p>{props.description}</p>
             
            </section>
          </div>
          <section className={styles.memberList}>
            <h3>Members :   {props.members.join(", ")}</h3>
          </section>

    
        </div>
      </article>
    </>
  );
}

export default BandSingleView;
