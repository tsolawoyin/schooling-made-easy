function Header() {
    return (
        <header>
            <h1>Schooling Made Easy <i class="fa-solid fa-brain"></i>
            </h1>
            <nav>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="https://discord.com/channels/966274062294843424/966290690302701588/966699802899386408">How to Navigate our Discord Community</a></li>
                    <li><a href="#form">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

function Form() {
    return (
        <form name="messageFromUser" id="form" netlify>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div clasNames="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div className="app-contact">CONTACT INFO </div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input type="text" class="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div class="app-form-group">
                                        <input className="app-form-control" type="email" placeholder="EMAIL" />
                                    </div>
                                <div className="app-form-group">
                                    <input className="app-form-control" type="text" placeholder="CONTACT NO" />
                                </div>
                                <div className="app-form-group message">
                                    <input className="app-form-control" type="text" placeholder="MESSAGE" />
                                </div>
                                <div className="app-form-group buttons">
                                    
                                    <button className="app-form-button" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <div class="credits">
        inspired by
        <a class="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
            <svg class="dribbble" viewBox="0 0 200 200">
            <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
                <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
                <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
            </g>
            </svg>
            Gururaj
        </a>
        </div>*/} 
    </div> 
    </div>
</form>
    )
}

function Main() {
    return(
        <main>
            <section className="about--us" id="about-us">
                <article>
                    <h1>About Us</h1>
                    <p>The moment one stops learning marks the beginning of one's retrogression, as an open-mind is a functional mind which can learn, unlearn, relearn, conserve values and question the unquestionable for its progress and humanity as a whole. On this note was this community built to connect functional minds together for progressive learning purposes</p>
                    <p>Schooling made easy(SME) was created by young Nigerians to facilitate an easier means of study on a more organized platform; <span><a href="https://discord.com/channels/966274062294843424/966290690302701588/966699802899386408">DISCORD</a></span>. The motive behind the initiative is to encourage geniuses and aspiring geniuses to meet, therefore this community serves as a community solely for such people to meet as against most social media. Note that schooling made easy initiative isn't restricted to formal education alone as there are several categories for people wanting to learn certain skills.</p>
                    <p>This community is highly communicative as you can make your opinions known to the moderators about the community, make complaints about an abuse from a fellow community member. Your ideas, opinions, and views will be welcomed as we are here for you and ours.</p>
                    <p>In conclusion, we welcome you to the biggest learning community in Africa where great minds meet. Let the brainstorming begins, not all about classes but more of productivities and services to humanity</p>
                </article>
            </section>
            <section className="how-to-navigate" id="navigate--section"></section>
            <section id="join--us">
                <iframe src="https://discord.com/widget?id=966274062294843424&theme=dark" width="350" height="500"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                <button id="join-us-btn"><a href="https://discord.gg/JttcmZz8FM">Join Us Now</a></button>
            </section>
        </main>
    )
}

function App() {
    return(
        <div id="main--div">
            <Header />
            <Main />
            <Form />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))