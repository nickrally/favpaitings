import SignMeUp from "./SignMeUp";
export const Header = () => {
  const signupCallback = (email) => {
    return console.log(`sign up called with email ${email}`);
  };
  return (
    <div className="jumbotron jubmbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 2021</h6>
          <h6 className="text-uppercase">Flint Way</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="" alg="some logo" />
          </div>
          <h2>PAINTINGS</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
