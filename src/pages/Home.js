import { Link } from "react-router-dom";
import "../Home.css"


const Home = () => {
    return (
        <div className="home-grid">
            <section className="hero">
                <div style={{ position: 'relative' }}>
                    <img src="https://ih1.redbubble.net/image.5115581133.8421/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="pizza1"/>
                    <div
                        className="is-flex"
                            style={{
                                // flexDirection:"column",
                                // position: 'absolute',
                                // top: '30%',
                                // left: "0px",
                                // right: "0px",
                                // height: "40%",
                                // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                // color: 'white',
                                // paddingTop: "5%",
                                // textAlign: 'center',
                            }}>
                                {/* <div className="eat-enjoy-repeat">EAT  ENJOY  REPEAT</div> */}
                                {/* <div className="see-menu-button">
                                    <Link to="/menu" className="button is-light">SEE MENU</Link>
                                </div> */}
                        
                    </div>
                </div>

                <div class="home-info1">
                    <div class="container-fluid text-center" 
                    style={{ 
                        paddingTop: 'calc(100vmax / 10)', 
                        paddingBottom: 'calc(100vmax / 10)'}}>
                        <p>Inspired from the book Atomic Habits by James Clear, this app will help you to organize Habits, groups of Habits called Stacks, and keep track of your progress!</p>
                    </div>
                </div>
                <div class="home-info">
                    <div>
                        <img src="https://uploads-ssl.webflow.com/600aeb5b1d32ae45380517ee/63c5c31d5f3ff14d51781c59_21-atomic-habits-visual-book-summary-habit-stacking.png" alt="pizza2" />
                    </div>
                </div>

                <div class="home-info2">
                    <div class="container-fluid text-center" 
                    style={{
                        paddingTop: 'calc(80vmax / 10)', 
                        paddingBottom: 'calc(80vmax / 10)'}}>
                        <p>- What is Habit Stacking? -<br/><br/>
                                Incorporating what you already do daily<br/><br/>

                                Imagine the simple act of sipping morning coffee becoming the gateway to a daily mindfulness practice, or the routine walk evolving into a fitness ritual. Habit stacking is a beacon of possibility, unlocking the potential for incremental yet profound change. It's a compass guiding us towards a life where each action, no matter how small, contributes to a greater, more vibrant version of ourselves. Embrace the power of habit stacking, and witness the extraordinary transformation that occurs when intention meets the cadence of our daily existence.<br/><br/>

                                Imagine the simple act of sipping morning coffee becoming the gateway to a daily mindfulness practice, or the routine walk evolving into a fitness ritual. Habit stacking is a beacon of possibility, unlocking the potential for incremental yet profound change. It's a compass guiding us towards a life where each action, no matter how small, contributes to a greater, more vibrant version of ourselves. Embrace the power of habit stacking, and witness the extraordinary transformation that occurs when intention meets the cadence of our daily existence.<br/><br/>

                                You can change the course of your life, one day at a time.<br /><br />
                            
                                <Link to="/habit">START A NEW HABIT</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>   
    )
}

export default Home;


