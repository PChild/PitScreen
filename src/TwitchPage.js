import React from "react";
import Container from "@material-ui/core/Container";
import { TwitchEmbed } from "react-twitch-embed";

export default function TwitchPage() {
    return (
        <TwitchEmbed
            id="player"
            allowFullscreen={false}
            channel="SmallAnt"
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
