import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";
import { BACKEND_URL } from "../utils";
import { AiOutlineCheck } from "react-icons/ai";
import AllContents from "./AllContents";
import { Link, useNavigate } from "react-router-dom";

const SlideImg = ({
  ele,
  openModal,
  setZindex,
  key,
  index,
  check,
  ranking,
  setCheck,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const [mouseEnter, setMouseEnter] = useState(false);

  const like = async () => {
    await axios({
      url: `${BACKEND_URL}/browse/my-list`,
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
      params: {
        useremail: sessionStorage.getItem("email"),
        contentId: ele?.id,
      },
    });
    const data = await axios({
      url: `${BACKEND_URL}/browse/my-list/check`,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
      params: {
        useremail: sessionStorage.getItem("email"),
      },
    });
    setCheck(data.data);
  };
  useEffect(() => {
    try {
      const getCategory = async () => {
        const data = await axios({
          url: `${BACKEND_URL}/category`,
          method: "GET",
          params: { id: ele?.id },
        });
        setCategory(data.data);
      };
      getCategory();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const playState = () => {
    navigate("/player", {
      state: ele,
    });
    // navigate("/player", { state: ele });
  };

  return (
    <div
      style={
        isActive
          ? { zIndex: "999", marginRight: "10px" }
          : { zIndex: "-1", marginRight: "10px" }
      }
      className={
        index === 0 || index === 6
          ? "thumbnail-box2 hover_thumbnail-box2_06"
          : index === 5 || index === 10
          ? "thumbnail-box2 hover_thumbnail-box2_5n"
          : "thumbnail-box2"
      }
      onMouseLeave={() => {
        setIsActive(false);
        setZindex(false);
      }}
      onMouseEnter={() => {
        setIsActive(true);
        setZindex(true);
      }}
    >
      <div className="thumbnail-img2">
        <Link to={isActive ? "/player" : null} state={ele}>
          <img
            className="thumbnail-img"
            style={isActive ? { zIndex: "1" } : { zIndex: "0" }}
            src={ele?.contentImg}
            alt=""
          />
        </Link>
      </div>
      <div className="thumbnail-content2">
        <div className="thumbnail-content__icon2">
          <div className="icon-left2">
            <BsPlayFill
              onClick={isActive ? playState : null}
              className="playBtn"
            />

            {check[ele?.id - 1]?.likeStatus ? (
              <AiOutlineCheck onClick={like} style={{ cursor: "pointer" }} />
            ) : (
              <BsPlusLg onClick={like} style={{ cursor: "pointer" }} />
            )}

            <BsHandThumbsUp
              style={{ cursor: "pointer" }}
              className="good"
              onMouseEnter={() => {
                setMouseEnter(true);
              }}
              onMouseLeave={() => {
                setMouseEnter(false);
              }}
            />

            <div
              className={mouseEnter ? "hover_box_run" : "hover_box_none"}
              onMouseEnter={() => {
                setMouseEnter(true);
              }}
              onMouseLeave={() => {
                setMouseEnter(false);
              }}
            >
              <BsHandThumbsDown />
              <BsHandThumbsUp />
              <div className="good_overlapping">
                <BsHandThumbsUp />
                <BsHandThumbsUp />
              </div>
            </div>

            {/* <a className="evaluation" href="/">
              <BsHandThumbsUp
                style={{
                  fontSize: "20px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                }}
              />
              <div className="evaluation_hover">
                <div className="evaluation_icon1 evaluation_icons">
                  <BsHandThumbsDown
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className="evaluation_icon2 evaluation_icons">
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className="evaluation_icon3 evaluation_icons">
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                    }}
                  />
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-20%, -63%)",
                      zIndex: "10",
                    }}
                  />
                </div>
              </div>
            </a> */}
          </div>
          <div
            className="icon-right2"
            onClick={() => {
              openModal(ele ? ele : null);
              console.log("모달 클릭 : ", ele);
            }}
          >
            <BsChevronDown style={{ cursor: "pointer" }} />
          </div>
        </div>

        <div className="thumbnail-content__txt2">
          <div className="video_mini_detail flex">
            <div className="text1">99% 일치</div>
            <div className="view_age">15+</div>
            <div className="episode"> 에피소드 5개</div>
            <div className="HD">HD</div>
          </div>
        </div>

        <ul className="video_genre flex">
          <li>범죄 시리즈, 한국 드라마, 무슨 카테고리</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideImg;
