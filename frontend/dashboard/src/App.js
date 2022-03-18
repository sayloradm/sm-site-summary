import { ReactComponent as Down } from './images/icon-down.svg';
import { ReactComponent as Instagram } from './images/icon-instagram.svg';
import { ReactComponent as Twitter } from './images/icon-twitter.svg';
import { ReactComponent as Up } from './images/icon-up.svg';
import { ReactComponent as Youtube } from './images/icon-youtube.svg';
import { ReactComponent as Facebook } from './images/icon-facebook.svg';
import facebookGraph from './images/Facebook Followers.png'
import twitterGraph from './images/Twitter Followers.png'
import instagramGraph from './images/Instagram Followers.png'
import youtubeGraph from './images/Youtube Subs.png'
import TopCard from './TopCard'
import BottomCard from './BottomCard'
import Toggle from 'react-toggle'
import './App.scss';
import './mobile.css';
import "react-toggle/style.css";
import useLocalStorage from 'use-local-storage';

function App() {

    //Store the state of the 'theme' aka dark or light mode
    const [theme, setTheme] = useLocalStorage('theme', 'dark' ? 'light' : 'dark');

    //Store the state of the dark mode toggle when it is used
    const [toggle, setToggle] = useLocalStorage('toggle', false ? true : false);

    /***
     * Switches the state of the dark mode toggle
     * as well as the theme of the page.
     */
    const switchTheme = () => {
        const newToggle = toggle === false ? true : false;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
        setToggle(newToggle)
    }

    return (
<body>
    <div className="backGround" data-theme={theme}>
        <link rel="stylesheet" href="https://fonts.google.com/specimen/Inter"/>
        <div className="bg-header" data-theme={theme}></div>
        <hr className={"mobileHr"} color={"black"} />
            <h1 data-theme={theme}>Social Media Dashboard</h1>
            <h3>Total Followers: 23,004</h3>
        <div className="dark-mode-toggle">
                <h4>Dark Mode</h4>
                <Toggle
                    data-theme={theme}
                    checked={toggle}
                    icons={false}
                    onChange={switchTheme}/>
            </div>
            <div className="topCards">
                <TopCard id={"facebook"} description={"F O L L O W E R S"} number={"1987"}
                         tag={"@nathanf"} change={"12 Today"} img={Facebook} arrow={Up} object={"Followers"} backImg={facebookGraph}/>
                <TopCard id={"twitter"} description={"F O L L O W E R S"} number={"1044"}
                         tag={"@nathanf"} change={"99 Today"} img={Twitter} hId={"tHeader"} arrow={Up} object={"Followers"} backImg={twitterGraph}/>
                <TopCard id={"instagram"} description={"F O L L O W E R S"} number={"11K"}
                         tag={"@realnathanf"} change={"1099 Today"} img={Instagram} hId={"iHeader"} arrow={Up} object={"Followers"} backImg={instagramGraph}/>
                <TopCard id={"youtube"} description={"S U B S C R I B E R S"} number={"8239"}
                         tag={"Nathan F."} change={"144 Today"} img={Youtube} hId={"yHeader"} arrow={Down} colorId={"arrowDown"} object={"Subscribers"} backImg={youtubeGraph}/>
            </div>
                <h3 id="overview" data-theme={theme}>Overview - Today</h3>
                <BottomCard id={"fbViews"} description={"Page Views"}
                            percent={"3%"} img={Facebook} arrow={Up} number={"87"} colorId={"smallCardText"}/>
                <BottomCard id={"fbLikes"} description={"Likes"}
                            percent={"2%"} img={Facebook} arrow={Down} number={"52"} colorId={"smallCardTextRed"}/>
                <BottomCard id={"tRt"} description={"Likes"}
                            percent={"553%"} img={Twitter} arrow={Up} number={"507"} colorId={"smallCardText"}/>
                <BottomCard id={"tLikes"} description={"Retweets"}
                            percent={"303%"} img={Twitter} arrow={Up} number={"117"} colorId={"smallCardText"}/>
                <BottomCard id={"iLikes"} description={"Likes"}
                            percent={"2257%"} img={Instagram} arrow={Up} number={"5462"} colorId={"smallCardText"}/>
                <BottomCard id={"iViews"} description={"Profile Views"}
                            percent={"1375%"} img={Instagram} arrow={Up} number={"52K"} colorId={"smallCardText"}/>
                <BottomCard id={"ytViews"} description={"Total Views"}
                            percent={"12%"} img={Youtube} arrow={Down} number={"1407"} colorId={"smallCardTextRed"}/>
                <BottomCard id={"ytLikes"} description={"Likes"}
                            percent={"19%"} img={Youtube} arrow={Down} number={"107"} colorId={"smallCardTextRed"}/>
    </div>
</body>
);
}

export default App;
