import React, { useState, useContext, useCallback, useMemo } from "react";

import { Header } from "./Header";
import { Menu } from "./Menu";

import PaintingDetail from "./PaintingDetail";
import { ConfigContext } from "./App";
import { GlobalContext } from "./GlobalState";

const Paintings = ({}) => {
  const ctx = useContext(ConfigContext);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  const {
    isLoading,
    paintingList,
    togglePaintingFavoriteStatus,
    hasError,
    error,
  } = useContext(GlobalContext);

  const handleChangeSaturday = () => {
    setSaturday(!saturday);
  };

  const handleChangeSunday = () => {
    setSunday(!sunday);
  };

  const onHeartFavoriteHandler = useCallback((e, painting) => {
    e.preventDefault();
    togglePaintingFavoriteStatus(painting);
  }, []);

  const memoizedPaintingList = useMemo(
    () =>
      paintingList
        .filter(({ sat, sun }) => (saturday && sat) || (sunday && sun))
        .sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }),
    [saturday, sunday, paintingList]
  );

  const paintingListFiltered = isLoading ? [] : memoizedPaintingList;

  if (isLoading) return <div>Loading...</div>;
  if (hasError) return <div>{error.message}</div>;
  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 checkobx-bigger">
          {ctx.showViewingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={saturday}
                  />
                  Saturday
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={sunday}
                  />
                  Sunday
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {paintingListFiltered.map((painting) => {
              return (
                <PaintingDetail
                  key={painting.id}
                  painting={painting}
                  onHeartFavoriteHandler={onHeartFavoriteHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
