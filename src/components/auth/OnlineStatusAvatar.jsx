import React from "react";
import { OnlineStatusBadge, UserAvatar } from "../../index";

const OnlineStatusAvatar = ({ user, size, online = "true" }) => {
  return (
    <OnlineStatusBadge online={online}>
      <UserAvatar src={user.avatar} size={size} />
    </OnlineStatusBadge>
  );
};

export default OnlineStatusAvatar;
