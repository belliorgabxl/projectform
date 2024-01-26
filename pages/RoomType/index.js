import style from "./roomtype.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";


export default function RoomType(){
    return(
        <div className={style.body}>
            <div className={style.container}>
                <Navbar/>

                
                <div className={style.RoomType}>  
                    RoomType
                </div>


            
                
                <div className={style.boxgrid}>
                        <div  className={style.roomBox}>
                           <div className={style.img1}>
                                <img src="https://i.pinimg.com/originals/e2/60/71/e260712a4ebfe4e58d4c182fa1ac1a4d.gif" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}}/>  
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    SJ House
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 11/6 แยกสุขสมาน
                           </div>
                           <div>
                                <Link href="/RoomDetail"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/564x/61/11/00/611100f92e606fb39547c66f80e827fd.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    Maethus 
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 44 แยกสุขสมาน
                           </div>
                           <div>
                                <Link href="/RoomDetail"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                           
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/564x/6b/8d/66/6b8d6606dbf23f5ec6eed11bc005d9f9.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div>
                                    BB Court
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 14/2 ถ.ลาดกระบัง
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        </div>
                </div>





                <div className={style.boxgrid}>
                        <div  className={style.roomBox}>
                           <div className={style.img1}>
                                <img src="https://i.pinimg.com/736x/d3/c0/85/d3c0857dc009024e6260285e4cb1b125.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}}/>  
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    K.P.
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ. 42/6 ลาดกระบัง
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/736x/79/d8/aa/79d8aa6263ffc42f3f9ff2f5285b2c7b.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    B9 airport
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง ถ.ลาดกระบัง
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                           
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/564x/b7/34/89/b73489fcc01624968175be477deb592c.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div>
                                    AP
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                เกกี 2 ลาดกระบัง
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        </div>
                </div>

                <div className={style.boxgrid}>
                        <div  className={style.roomBox}>
                           <div className={style.img1}>
                                <img src="https://i.pinimg.com/564x/d2/ad/e5/d2ade5e8f524c7bc3c72f286f78b547b.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}}/>  
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    PP home
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 11/6 แยกสุขสมาน
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/564x/2a/bf/bd/2abfbdff378a7f4280ef5d26499c97cb.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div >
                                    Gin Grand
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 44 แยกสุขสมาน
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                           
                        
                        </div>

                        <div className={style.roomBox}>
                           <div>
                                <Link href="#"><img src="https://i.pinimg.com/564x/c1/93/81/c193815be0ecef69b7c0c0293f3a5b35.jpg" width ={311} height ={200} style={{borderRadius: '20px 20px 0 0'}} /></Link>    
                           </div>
                           <div className={style.textsell}>
                                <div>
                                    Skk Court
                                </div>
                           </div>
                           <div className={style.icon1}>
                                <img src="/map.png" width={20} height={20}></img>
                                ซ.ลาดกระบัง 14/2 ถ.ลาดกระบัง
                           </div>
                           <div>
                                <Link href="#"  className={style.Button2} ><span>choose</span></Link>
                           </div>
                        </div>
                </div>



                <div className={style.Box5}>
                  <img src="/imgimg.jpg" width={900} height={400} style={{borderRadius: '20px'}}></img>
               </div>

                






            </div>


            

        </div>
    )
}