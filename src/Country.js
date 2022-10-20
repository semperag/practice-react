const Country = () => {
    let image = "https://flagcdn.com/w320/us.png"
    let name = "United States of America";
    let population = 329484123;
    let region = "Americas";
    let capital = "Washington, D.C.";

    return (
        <div className="country">
          <img src={image}></img>
          <div className="country-container">
            <div className="country-name">{name}</div>
            <div className="quick-facts">
                <div className="population">
                <span className="title">Population: </span>
                <span>{population}</span>
                </div>
                <div className="region">
                <span className="title">Region: </span>
                <span>{region}</span>
                </div>
                <div className="capital">
                <span className="title">Capital: </span>
                <span>{capital}</span>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Country;