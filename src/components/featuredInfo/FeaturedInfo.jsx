import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">intervention planifié</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Intervention en cours </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>

      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Intervention terminé</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">200</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Par rapport au mois dernier</span>
      </div>
    </div>
  );
}
