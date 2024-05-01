import React from 'react';
import DailyIframe from '@daily-co/daily-js';

const VideoCall = () => {
  const startVideoCall = async () => {
    const callFrame = DailyIframe.createFrame({
      showLeaveButton: true,
    });

    callFrame.join({ url: 'https://educationapp.daily.co/test' });
    callFrame.render(document.getElementById('daily-frame'));
  };

  return (
    <div>
      <h1>Video Call</h1>
      <button onClick={startVideoCall}>Start Video Call</button>
      <div id="daily-frame"></div>
    </div>
  );
};

export default VideoCall;
