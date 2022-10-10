import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../styles/TestVideo.scss";
const TestVideo = () => {
  return (
    <div className="billboard-row">
      <div className="billboard-motion">
        <div className="nfp"></div>
        <div className="motion-background-components">
          <div className="hero-image-wrapper">
            <div style={{ width: "100%", height: "920px" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4OSFPrOL1LQ?autoplay=1&mute=1&version=3&loop=1&playlist=4OSFPrOL1LQ&rel=0&controls=0"
                title="mido's frenid video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ position: "relative" }}
              />
              <div
                className="title-text"
                style={{
                  position: "absolute",
                  ZIndex: "9999",
                  top: "50%",
                  left: "20px",
                  width: "500px",
                }}
              >
                <img
                  src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUq6SWe3nmuxzdO9Gd3VFi303ou0BWefzxdJs-CmirWGUNQrk1agqq1ZkeuqErcYU7btG-xYQBh1hLe0tf_jRDzLajEKxQqa8Q-PPIGK7bM.webp?r=803"
                  alt="슬기로운 의사 생활"
                  className="title-img"
                  style={{ width: "100%" }}
                />
                <div
                  className="play-btn-box"
                  style={{ width: "300px", display: "flex" }}
                >
                  <button
                    className="play-btn"
                    style={{
                      width: "100%",
                      fontSize: "1.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <a href="/">
                      <BsFillPlayFill /> 재생
                    </a>
                  </button>
                  <button
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    {" "}
                    <div
                      className="information-icon"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <AiOutlineInfoCircle />
                    </div>
                    <div
                      className="information-text"
                      style={{ fontSize: "1.2rem" }}
                    >
                      상세 정보
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideo;
