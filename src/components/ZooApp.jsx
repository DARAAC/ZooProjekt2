import Banner from './Banner.jsx'
import { Link } from 'react-router-dom';
import ZooAppBild from '../assets/header-zooapp.png'

function ZooApp() {

    const IOS = 'https://apps.apple.com/de/app/zoo-z%C3%BCrich/id527856894?mt=8+'
    const Android = 'https://play.google.com/store/apps/details?id=ch.futurecom.zoozurich&pli=1#?t=W251bGwsMSwyLDIxMiwiY2guZnV0dXJlY29tLnpvb3p1cmljaCJd'

    return(
        <div className="ZooApp">
            {/* Logo */}
            <div className="logo">
                < Link to='/'>
                    <img src='/src/assets/logo.png' alt="Zoo Logo"/>
                </Link>
            </div>
            <div>
                < Banner image={ZooAppBild}/>
            </div>
            <div className='App-Container'>
                <h1 className='Titel-App'>Zoo App</h1>
                <div className='Buttons-App'>
                    < Link to={Android} >
                    <button className='Button-Android'>Download Android</button>
                    </Link>
                    < Link to={IOS}>
                    <button className='Button-IOS'>Download IOS</button>
                    </Link>
                </div>
                <p className='App-text'>Alles Wichtige im Zoo Zürich in der Hosentasche: Kaufen Sie ein Zoo-Ticket und scannen Sie es am Eingang direkt aus der App. Die App zeigt Ihnen, welche Tiere wo zu Hause sind, wann es Tierpräsentationen und Fütterungen gibt und wo sich Restaurants, Spielplätze und Toiletten befinden. Sie finden Informationen zu jedem Tier im Zoo und können eine Liste mit Ihren Lieblingstieren anlegen. Beantworten Sie zudem die Fragen im Zoo-Quiz und lernen Sie so Tiere und Naturschutzprojekte des Zoo Zürich näher kennen. </p>
                <h2 className='App-Titel'>Funktionen</h2>
                
                <ul className='App-List'>
                    <li>Zoo-Ticket kaufen und direkt aus der Zoo-App am Eingang scannen</li>
                    <li>Zoo-Quiz für einen lehrreichen, interessanten und unterhaltsamen Zoobesuch der ganzen Familie</li>
                    <li>Interaktiver Zooplan mit allen Tieren, Veranstaltungen und wichtigen Örtlichkeiten (Ausstellungen, Restaurants, WC, Spielplätze etc.</li>
                    <li>Tagesaktuelle Infos zu Tierpräsentationen und Fütterungen</li>
                    <li>Hintergrundinfos zu jedem Tier</li>
                    <li>Favoritenliste für Lieblingstiere</li>
                    <li>Verfügbar in drei Sprachen: Deutsch, Französisch und Englisch</li>
                </ul>

                <h2 className='App-Titel'>Neu: Jahreskarte in der App</h2>
                <p className='App-text'>Neu können Sie Ihre persönliche Jahreskarte digital in unserer kostenlosen Zoo-App erfassen und beim Eingang direkt ab Ihrem Smartphone scannen. Die neue Funktionalität ist jetzt verfügbar; stellen Sie sicher, dass Sie die aktuellste Version der Zoo-App auf Ihrem Telefon geladen haben.</p>
                
            </div>
            
        </div>
        

    );

}

export default ZooApp