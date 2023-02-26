import React from "react";
import {
  AudioPlayerControlSprite,
  Audio,
  AudioPlayer,
} from "react-audio-player-pro";
import "react-audio-player-pro/dist/style.css";

const mediaMetadata = {
  // required
  title: "Montage 2018",

  // optional
  artist: "Mike Baker",

  // optional
  album: "Always July",

  // optional
  artwork: [
    // src, sizes and type is required
    { src: "/path/to/image/64px/64px", sizes: "64x64", type: "image/png" },
    { src: "/path/to/image/128px/128px", sizes: "128x128", type: "image/png" },
  ],
};

export function ExampleAudio() {
  return (
    <>
      <AudioPlayerControlSprite />
      <Audio
        // string - path to audio file, required
        src="./assets/audio/Montage2018.mp3"
        // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
        preload="auto"
        // duration - number, default: 0, optional
        // will updated automatically when track started or metadata loaded
        duration={100}
        // MediaMetadata - media meta data, optional
        // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
        mediaMetadata={mediaMetadata}
        // string - wrapper's class name, optional, deafult: ''
        className="my-class-name"
        // callback function - called on did mount, optional, default: noop
        onDidMount={console.log}
        // string - name for download file, optional, deafult: <src>
        downloadFileName=""
        // boolean - show repeat button, optional, deafult: false
        useRepeatButton={true}
      />
    </>
  );
}

// multiple audio track player

const audioTrackList = [
  {
    // string - path to audio file, required
    src: "/path/to/audio/file",

    // string - 'none' | 'metadata' | 'auto', default: 'auto', optional
    preload: "auto",

    // duration - number, default: 0, optional
    // will updated automatically when track started or metadata loaded
    duration: 100,

    // JSX.Element - custom content instead of title, optional, deafult: <title> or <src>
    content: undefined, //<CustomContent />,

    // MediaMetadata - media meta data, see `mediaMetadata` above
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata/MediaMetadata
    // optional
    mediaMetadata: {
      title: "Lesser Faith",
      artist: "J. Syreus Bach",
      album: "Ability to Break ~ Energetic Tracks",
      artwork: [
        { src: "/path/to/image/64px/64px", sizes: "64x64", type: "image/png" },
        {
          src: "/path/to/image/128px/128px",
          sizes: "128x128",
          type: "image/png",
        },
      ],
    },
  },
  // other tracks here...
];

export function ExampleAudioPlayer() {
  return (
    <>
      <AudioPlayerControlSprite />
      <AudioPlayer
        // Array<TrackType> - list of track, see `audioTrackList` above, required
        trackList={audioTrackList}
        // string - wrapper's class name, optional, deafult: ''
        className="my-class-name"
        // callback function - called on did mount, optional, default: noop
        onDidMount={console.log}
        // default player state, optional
        defaultState={{
          // boolean - is player muted, optional, default: false
          isMuted: false,

          // number - active song index, optional, default: 0
          activeIndex: 0,

          // boolean - is shuffle on, optional, default: false
          isShuffleOn: false,

          // boolean - is track list open, optional, default: true
          isTrackListOpen: true,

          // string: 'none' | 'all' | 'one' - repeating state, optional, default: 'none'
          repeatingState: "none",
        }}
      />
    </>
  );
}

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-2xl text-white uppercase tracking-[6px] pb-6">
        Recent Demos
      </h1>
      <div className="fixed bottom-0 pb-14 md:pb-10 lg:pb-10 right-10 left-10">
        <div className="font-semibold  text-white uppercase tracking-[6px] pb-3">
          Montage 2018
        </div>
        <ExampleAudio />
      </div>
    </div>
  );
};

export default Home;
