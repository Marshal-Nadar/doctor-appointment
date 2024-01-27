import React, { useState } from 'react';

const Accordion = ({ buttonsToShow, allButtons }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleButtons = showAll ? allButtons : buttonsToShow;

  return (
    <div className='select-date-main'>
      {visibleButtons.map((button, index) => (
        <React.Fragment key={index}>{button}</React.Fragment>
      ))}
      {allButtons.length > buttonsToShow.length && (
        <button className='show-btn' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show All ...'}
        </button>
      )}
    </div>
  );
};

export default Accordion;
