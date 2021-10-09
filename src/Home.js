import { Header } from "./Header";
import { Menu } from "./Menu";

function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Good Paintings that are very good.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
