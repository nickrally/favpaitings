import React, {
  useEffect,
  useState,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

import { Header } from "./Header";
import { Menu } from "./Menu";
import PaintingData from "./PaintingData";
import PaintingDetail from "./PaintingDetail";
import { ConfigContext } from "./App";
import reducer from "./reducer";

const Paintings = ({}) => {
  const ctx = useContext(ConfigContext);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  //let's replace two states with a complex one state managed by useReducer.
  // It will also require changes in reducer.js

  //const [paintingList, dispatch] = useReducer(reducer, []);
  //const [isLoading, setIsLoading] = useState(true);

  const initState = {
    isLoading: true,
    paintingList: [],
  };
  const [{ isLoading, paintingList }, dispatch] = useReducer(
    reducer,
    initState
  );

  useEffect(() => {
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      dispatch({
        type: "setPaintingList",
        data: PaintingData,
      });
    });

    return () => {
      console.log("cleanup if needed");
    };
  }, []);

  const handleChangeSaturday = () => {
    setSaturday(!saturday);
  };

  const handleChangeSunday = () => {
    setSunday(!sunday);
  };

  const onHeartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispatch({
      type: favoriteValue ? "favorite" : "unfavorite",
      id: sessionId,
    });
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
            {paintingListFiltered.map(
              ({ id, firstName, lastName, title, favorite }) => {
                return (
                  <PaintingDetail
                    key={id}
                    id={id}
                    firstName={firstName}
                    lastName={lastName}
                    favorite={favorite}
                    title={title}
                    onHeartFavoriteHandler={onHeartFavoriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
