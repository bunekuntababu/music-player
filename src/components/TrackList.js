import React from 'react';
import { FaHeart, FaTrashAlt } from 'react-icons/fa';

const TrackList = ({ audioFiles, currentTrackIndex, setCurrentTrackIndex, addToWishlist, removeFromWishlist, wishlist }) => {
  const renderTrack = (track, index) => (
    <div
      key={index}
      className={`track-item ${index === currentTrackIndex ? 'active' : ''}`}
      onClick={() => setCurrentTrackIndex(index)}
    >
      <img src={track.albumArt} alt={track.title} />
      <div>
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          wishlist.includes(index) ? removeFromWishlist(index) : addToWishlist(index);
        }}
        style={{ color: wishlist.includes(index) ? 'red' : 'initial' }}
      >
        {wishlist.includes(index) ? <FaTrashAlt /> : <FaHeart />}
      </button>
    </div>
  );

  return (
    <div className="track-list">
      {/* Render all tracks in a 2-column grid */}
      <div className="track-grid">
        {audioFiles.map((track, index) => renderTrack(track, index))}
      </div>
    </div>
  );
};

export default TrackList;
