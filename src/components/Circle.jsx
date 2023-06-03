import React from 'react';
import PropTypes from 'prop-types';

function Circle({
  color, radius, text, showText, onClick,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: color,
        cursor: 'default',
      }}
      onClick={onClick}
      onKeyDown={onClick}
    >
      { showText && (
      <div style={{ textAlign: 'center', paddingTop: radius - 20 }}>
        <span style={{ color: 'white', fontSize: 20 }}>{text}</span>
      </div>
      )}

    </div>
  );
}

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  showText: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Circle;
