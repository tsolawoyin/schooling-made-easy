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


function Main() {
    return(
        <main>
            <section className="welcome--section">
                <article><h1>Imagine a place...</h1>
                <p>"... where you can locate your learning curve, locate friends around the globe with similar interest, Schooling Made Easy a community on discord is the way to go."</p></article>
                
                <button className="join-us-btn"><a  href="">Join us now</a></button>
            </section>
            <section className="about--us" id="about-us">
                <article>
                    <h1>About Us</h1>
                    <p>The moment one stops learning marks the beginning of one's retrogression as an open mind is a functional mind which can learn, unlearn, relearn, conserve values and question the unquestionable for its progress and humanity as a whole. On this note was this community built to connect functional minds together for progressive learning purposes</p>
                    <p>Schooling made easy(SME) was created by young Nigerians to facilitate an easier means of study on a more organized platform; <span><a href="https://discord.com/channels/966274062294843424/966290690302701588/966699802899386408"> DISCORD</a></span>. The motive behind the initiative is to encourage geniuses and aspiring geniuses to meet, therefore this community serves as a community solely for such people to meet as against most social media. Note that schooling made easy initiative isn't restricted to formal education alone as there are several categories for people wanting to learn certain skills.</p>
                    <p>This community is highly communicative as you can make your opinions known to the community's moderators and make complaints about abuse from a fellow community member. Your ideas, opinions, and views will be welcomed as we are here for you and ours.</p>
                    <p>In conclusion, we welcome you to the biggest learning community in Africa where great minds meet. Let the brainstorming begins, not all about classes but more about productivity and services to humanity</p>
                </article>
            </section>
            <section className="how-to-navigate" id="navigate--section"></section>
            <section id="join--us">
                <iframe src="https://discord.com/widget?id=966274062294843424&theme=dark" width="350" height="500"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                <button className="join-us-btn"><a href="https://discord.gg/JttcmZz8FM">Join Us Now</a></button>
            </section>
        </main>
    )
}

function App() {
    return(
        <div id="main--div">
            <Header />
            <Main />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))