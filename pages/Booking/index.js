import styles from "./booking.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Space from "@/components/SpaceTab";
import { useState , useEffect } from "react";
import { useRouter } from "next/router";

export default function(){
  const [dormitory , Setdorm] = useState("SJ-House");
  const [roomtype , setRoom] = useState("Comfort");
  const r = useRouter();

  function SubmitBooking(){
    r.push("/GenPDF");
  }

  return(
    <div className={styles.body}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.BookingZone}>

          <div className={styles.Topic}>Booking Form</div>
          <form className={styles.formBox}>
            <div className={styles.line1}>
            <div></div>
              <span>
                <label>ชื่อ</label>
                <input className={styles.inputBox} type="text" placeholder="Firstname"/>
              </span>
              <span>
                <label>นามสกุล</label>
                <input className={styles.inputBox} type="text" placeholder="Lastname"/>
              </span>
            </div>

            <div className={styles.line2}>
              <div></div>
              <span>
                <label>เบอร์ติดต่อ</label>
                <input className={styles.inputBox} type="text" placeholder="09X-XXX-XXX"/>
              </span>
              <span>
                <label>E-mail</label>
                <input className={styles.inputBox} type="text" placeholder="Email"/>
              </span>

            </div>

            <div className={styles.line3}>
            <div></div>
              <span>
                <label>หอพัก</label>
                <input className={styles.dorminput} type="text" value={dormitory} />
              </span>
              <span>
                <label>ประเภท</label>
                <input className={styles.dorminput} type="text" value={roomtype}  />
              </span>
            </div>

            <div className={styles.line4}>
              <div></div>
              <span>
                <input type="date" className={styles.date}/>
              </span>
              <span>
                <label>จำนวนผู้เข้าพัก</label>
                <input className={styles.Member} type="number"/>
              </span>
            </div>

            <div className={styles.line5}>
              <div></div>
              <span>
                <input
              type="radio"  name="status"  value="day"/>
              <label>รายวัน</label>
              </span>
              <span>
                <input 
                type="radio" name="status" value="month"/>
                <label>รายเดือน</label>
              </span>
              <span>
                <input 
                type="radio" name="status" value="year"/>
                <label >รายปี</label>
              </span>
            </div>

          </form>
          <div className={styles.btn}>
              <button type="submit" onClick={SubmitBooking} className={styles.button}>Booking</button>
          </div>
        </div>

      </div>
      <Space/>
      <Footer/>
    </div>
  )
}