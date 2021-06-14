import React from "react";
import { Container, Menu } from "semantic-ui-react";

function Navi() {
  return (
    <iv>
      <Menu inverted fixed="top" size="massive">
        <Container>
          <Menu.Item name="BiletiniAl" />
          <Menu.Item name="Şehir Değiştir" />
          <Menu.Item name="Sinema" />
          <Menu.Item name="Tiyatro" />
          <Menu.Item name="Diğer" />
          <Menu.Item name="T.C Kültür ve Turizm Bakanlığı" />
         
          <Menu.Menu position="right">
          <Menu.Item name="Giriş Yap" />
          <Menu.Item name="Kayıt Ol" />
          </Menu.Menu>
        </Container>
      </Menu>
    </iv>
  );
}

export default Navi;
