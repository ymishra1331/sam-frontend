import React from 'react';

const HomeTemplate1 = ({
  events,
  heading,
  divHeight,
  height,
  width,
  bgColor,
  divColor = '#D9D9D9', // Default color if divColor is not provided
  linkComponent = null, // Default to null if not provided
  textComponent = null, // Default to null if not provided
  buttonComponent = null, // Default to null if not provided
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor, height: divHeight }}
      className="w-full flex flex-col items-center justify-center gap-12"
    >
      <div>
        <h1 className="text-4xl uppercase">{heading}</h1>
      </div>
      <div className="flex justify-center items-center gap-[108px] w-9/12">
        {events?.map((event, key) => (
          <div key={key}>
            <div
              className="mb-4 "
              style={{ height, width}}
            >
              <img className="h-full w-full" src={event.images[0].img} alt="" />
            </div>
            {/* {linkComponent} */}
            <div className="w-full p-2 text-center">
              {/* {textComponent} */}
              {event.description}
            </div>
          </div>
        ))}
      </div>
      <div>
        {buttonComponent}
      </div>
    </div>
  );
};

export default HomeTemplate1;
