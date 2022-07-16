import React, { useEffect } from "react";

const MenuCard = ({ id, title, platform, score, genre, editors_choice }) => {
  //console.log(HereMenuData) u will see 9 arrayw values

  return (
    <>
      <section className="main-card--cointainer">
        <>
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <p>{score}</p>
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-category subtle">{title}</span>
                <h2 className="card-title">{platform}</h2>
                <span className="card-description subtle">{genre}</span>

                {/* <span className='card-read'>Read</span> */}
                {/* {<img src={image} alt="images" className='card-media'/> } */}
                <span className="card-tag subtle">{editors_choice}</span>
              </div>
            </div>
          </div>
        </>
        })}
      </section>
    </>
  );
};

export default MenuCard;
