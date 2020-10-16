import React from 'react';

const CityInfo = ({ info }) => {
  const displayName = `${info.city}, ${info.state}`;

  return (
    <div>
      <div>
        {displayName} |{' '}
        <a
          target="_new"
          href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
        >
          Wikipedia
        </a>
      </div>
      <img width={240} src={info.image} alt={info.city} />
    </div>
  );
};

export default CityInfo;
