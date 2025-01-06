
function NewsHeader({ Datum , Titel }){
    return(
        <div className="Header">
            <div className="Datum">
                <p className="DatumText">{Datum}</p>
            </div>
            <div className="Titel">
                <h1 className="TitelText">{Titel}</h1>
            </div>
        </div>
    );
}

export default NewsHeader;