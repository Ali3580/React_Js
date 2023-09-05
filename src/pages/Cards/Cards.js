import cdata from "../Carddata/Carddata";
import "./cards.css";

function CustomData(abc) {
  return (
    <>
    
      <div className="card">
        <div className="container">
          <div className="badge">
            <img src={abc.cardimg} alt="" />
          </div>
        </div>

        <div className="card-content">
          <div className="content-title">
            <div className="heading">
              <span>{abc.cardtitle}</span>
            </div>
          </div>
          <div className="content-title">
            <div className="price_icons">
              <p>
                <b>{abc.price}</b>
              </p>
              <div className="icons_main">
                <div className="icons">
                  <a href="#">
                    <div>{abc.icon1}</div>
                  </a>
                  <a href="#">
                    <div>{abc.icon2}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="content-title">
            <div className="category">{abc.category}</div>
          </div>
          <div className="content-title">
            <div className="Location">
              <a href="#">
                <div>{abc.icon3}</div>
              </a>
              <p>{abc.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      <h1>Cards</h1>

      {cdata.map((val, index) => (
        <CustomData
          key={index}
          cardimg={val.cardimg}
          cardtitle={val.cardtitle}
          price={val.price}
          icon1={val.icon1}
          icon2={val.icon2}
          icon3={val.icon3}
          category={val.category}
          location={val.location}
        />
      ))}
    </>
  );
}

export default Cards;
