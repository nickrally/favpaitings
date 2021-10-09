import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const PaintingDetail = ({
  id,
  firstName,
  lastName,
  favorite,
  title,
  onHeartFavoriteHandler,
}) => {
  console.log(`Painting detail: ${id} ${title}`);
  return (
    <div>
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          primaryImg={`/static/paintings/bw/${id}.jpg`}
          secondaryImg={`/static/paintings/${id}.jpg`}
          alt={title}
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              data-sessionid={id}
              className={favorite ? "heartredbutton" : "heartdarkbutton"}
              onClick={(e) => onHeartFavoriteHandler(e, !favorite)}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};
export default React.memo(PaintingDetail);
