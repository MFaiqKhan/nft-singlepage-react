import { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import TwitterLogo from "../assets/owner/twitter.png";
import MoreLogo from "../assets/owner/more.png";
import "./Front.css";

const Front = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  //console.log(activePunk);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="front">
      <div className="frontContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punkDetails">
          <div className="title" style={{ color: "#fff" }}>
            {activePunk.name}
            <span className="itemNumber">.#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="nameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="handle">@FaiqKhan</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={TwitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={MoreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
