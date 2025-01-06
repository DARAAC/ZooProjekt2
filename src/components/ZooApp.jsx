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
            </div>
            
        </div>
        

    );

}

export default ZooApp