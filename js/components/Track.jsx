import "../../scss/track.scss";

import React from "react";

import TrackActions from "../actions/tracks";
import EntryList from "../components/EntryList";

const Track = React.createClass({
    componentWillMount() {
        this.fetchTrack();
        this.startPolling();
    },
    componentWillUnmount() {
        this.stopPolling();
    },
    startPolling() {
        this.interval = setInterval(this.fetchTrack, 1000);
    },
    stopPolling() {
        clearInterval(this.interval);
    },
    fetchTrack() {
        if (!this.props.track) {
            return;
        }
        this.props.onRefresh(this.props.track.get("id"));
    },
    render() {
        const { track } = this.props;
        if (!track) {
            return <div></div>;
        }
        const times = track.get("times");
        if (!times) {
            return <div></div>;
        }

        return (
            <div className="block track">
                <h1 className="track__title">{track.get("name")}</h1>
                <h2 className="track__subtitle">{track.get("carName")} - {track.get("gameName")}</h2>
                <EntryList entries={track.get("times").toJS()} />
            </div>
        );
    }
});

export default Track;