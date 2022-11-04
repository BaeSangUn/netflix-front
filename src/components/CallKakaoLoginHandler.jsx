import React from "react";

const CallKakaoLoginHandler = () => {
  router.push({
    pathname: "https://kauth.kakao.com/oauth/authorize",
    query: {
      response_type: "code",
      client_id: "b51a521566c14452ea05b20e986ecb2e",
      redirect_uri: "http://localhost:5000/callback/kakao",
    },
  });
  return <div></div>;
};

export default CallKakaoLoginHandler;
