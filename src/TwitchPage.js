import React, { useContext } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import AppContext from "./AppContext";

export default function TwitchPage() {
    const twitchContext = useContext(AppContext);
    return (
        <TwitchEmbed
            id="player"
            allowFullscreen={false}
            channel={twitchContext.eventChannel}
            fontSize="small"
            height="100%"
            withChat={false}
            theme="light"
            width="100%"
            autoplay={true}
            muted={true}
        />
    );
}
