import Banner from "./Banner.jsx"
import Rhino from "../assets/headerRhino.jpg"
import Navigation from "./Navigation.jsx";
import React from "react";
import { Link } from "react-router-dom";
import './Tickets.css'


function Tickets() {

    return(
        <div className="Tickets">
            <Navigation/>
            {/* Logo */}
            <div className="logo">
                <img src='/src/assets/logo.png' alt="Zoo Logo"/>
            </div>     
            <div>
                <Banner image={Rhino} />
            </div>
            <div className="Category-Box1"> 
                <h3>Nebensaison (November – Februar)</h3>
                <table className="Category-Box1">
                    <thead>
                        <tr>
                            <th className="row0-clm0">Kategorie</th>
                            <th className="row0-clm1">Preis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="row1-clm0">Erwachsene (ab 21 Jahre)</td>
                            <td className="row1-clm1">CHF 27.- / CHF 28.-
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row2-clm0">Jügendliche (16-20 Jahre)</td>
                            <td className="row2-clm1">CHF 22.– / CHF 23.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row3-clm0">Kinder (6–15 Jahre)</td>
                            <td className="row3-clm1">CHF 14.– / CHF 15.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row4-clm0">Kinder unter 6 Jahren</td>
                            <td className="row4-clm1">gratis
                            </td>
                        </tr>
                        <tr>
                            <td className="row5-clm0">IV-Bezüger mit gültigem Ausweis</td>
                            <td className="row5-clm1">online nicht erhältlich / CHF 15.–
                            </td>
                        </tr>
                        <tr>
                            <td className="row6-clm0">Familientageskarte (Lebenspartner mit eigenen Kindern 6–15 Jahre)</td>
                            <td className="row6-clm1">CHF 74.– / CHF 76.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row7-clm0">Sunset-Ticket (ab 90 Minuten vor Zooschliessung)</td>
                            <td className="row7-clm1">40% Rabatt auf nicht rabattierte Einzeleintritte
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Category-Box2">
                <h3>Nebensaison (März – Oktober)</h3>
                <table className="Category-Box2">
                    <thead>
                        <tr>
                            <th className="row0-clm0">Kategorie</th>
                            <th className="row0-clm1">Preis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="row1-clm0">Erwachsene (ab 21 Jahre)</td>
                            <td className="row1-clm1">CHF 29.– / CHF 30.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row2-clm0">Jügendliche (16-20 Jahre)</td>
                            <td className="row2-clm1">CHF 24.– / CHF 25.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row3-clm0">Kinder (6–15 Jahre)</td>
                            <td className="row3-clm1">CHF 15.– / CHF 16.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row4-clm0">Kinder unter 6 Jahren</td>
                            <td className="row4-clm1">gratis
                            </td>
                        </tr>
                        <tr>
                            <td className="row5-clm0">IV-Bezüger mit gültigem Ausweis</td>
                            <td className="row5-clm1">online nicht erhältlich / CHF 16.–
                            </td>
                        </tr>
                        <tr>
                            <td className="row6-clm0">Familientageskarte (Lebenspartner mit eigenen Kindern 6–15 Jahre)</td>
                            <td className="row6-clm1">CHF 78.– / CHF 80.–
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="row7-clm0">Sunset-Ticket (ab 90 Minuten vor Zooschliessung)</td>
                            <td className="row7-clm1">40% Rabatt auf nicht rabattierte Einzeleintritte$
                            < Link to='/Ticketkauf'>
                                <a>Ticket Kaufen</a>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Tickets