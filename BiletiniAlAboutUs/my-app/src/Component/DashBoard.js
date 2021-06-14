import React from "react";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import { Route, Switch } from "react-router-dom";
import GizlilikBildirimi from "../Pages/GizlilikBildirimi";
import Hakkımızda from "../Pages/Hakkımızda";
import MüsteriHizmetleri from "../Pages/MüsteriHizmetleri";
import OnlineOdemeKosulları from "../Pages/OnlineOdemeKosulları";
import İletisim from "../Pages/İletisim";
import KisiselVeriler from "../Pages/KisiselVeriler";
import SozlesmevePolitika from "../Pages/SozlesmevePolitika";
import Sikcasorulan from "../Pages/Sikcasorulan";
import İptal from "../Pages/İptal";
import NasilBilet from "../Pages/NasilBilet";
import BiletinizimiKaybettiniz from "../Pages/BiletinizimiKaybettiniz";
import İsbasvurusu from "../Pages/İsbasvurusu";

export default function DashBoard() {
  return (
    <div className="Dashboard">
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route exact path="/" component={Hakkımızda} />
              <Route exact path="/Hakkimizda" component={Hakkımızda} />
              <Route
                exact
                path="/MüsteriHizmetleri"
                component={MüsteriHizmetleri}
              />
              <Route exact path="/Gizlilik" component={GizlilikBildirimi} />
              <Route
                exact
                path="/OnlineOdeme"
                component={OnlineOdemeKosulları}
              />
              <Route exact path="/İletisim" component={İletisim} />
              <Route exact path="/KisiselVeriler" component={KisiselVeriler} />
              <Route
                exact
                path="/SozlesmevePolitika"
                component={SozlesmevePolitika}
              />
              <Route exact path="/SikcaSorulan" component={Sikcasorulan} />
              <Route exact path="/iptal" component={İptal} />
              <Route exact path="/NasılBiletAlinir" component={NasilBilet} />
              <Route
                exact
                path="/biletinizi-mi-kaybettiniz"
                component={BiletinizimiKaybettiniz}
              />
              <Route exact path="/is-basvurusu" component={İsbasvurusu} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
