import React from 'react';

const ProgressBar = ({ playedTime, duration, onSeek, onProgress, onDuration }) => {
  const handleClick = (e) => {
    const progressBar = e.target;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    onSeek(clickPosition * duration);
  };

  return (
    <div className="progress-bar" onClick={handleClick}>
      <div
        className="progress"
        style={{ width: `${(playedTime / duration) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
