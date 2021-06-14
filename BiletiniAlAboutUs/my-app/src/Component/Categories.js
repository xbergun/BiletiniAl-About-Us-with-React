import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categoriesMain">
      <Menu vertical className="categories">
        <Menu.Item className="categories"  name="Kurumsal" />
        <Menu.Item className="categories" as={NavLink} to={"/Hakkimizda"} name="Hakkımızda" />
        <Menu.Item className="categories" as={NavLink} to={"/MüsteriHizmetleri"} name="Müşteri Hizmetleri" />
        <Menu.Item className="categories" as={NavLink} to={"/Gizlilik"} name="Gizlilik Bildirimi" />
        <Menu.Item className="categories" as={NavLink} to={"/OnlineOdeme"} name="Online Ödeme Koşulları" />
        <Menu.Item className="categories" as={NavLink} to={"/İletisim"} name="İletişim" />
        <Menu.Item className="categories" as={NavLink} to={"/KisiselVeriler"} name="Kişisel Verilerin Korunması" />
        <Menu.Item  className="categories"as={NavLink} to={"/SozlesmevePolitika"} name="Sözleşme ve Politikalar" />
        <Menu.Item className="categories" name="Yardım" />
        <Menu.Item  className="categories"as={NavLink} to={"/SikcaSorulan"} name="SSS" />
        <Menu.Item  className="categories"as={NavLink} to={"/iptal"} name="İptal, İade ve Değişim" />
        <Menu.Item  className="categories"as={NavLink} to={"/NasılBiletAlinir"} name="Nasıl Bilet Alınır" />
        <Menu.Item  className="categories"as={NavLink} to={"/biletinizi-mi-kaybettiniz"} name="Biletinizi mi Kaybettiniz?" />
        <Menu.Item  className="categories"name="Bizimle Çalışın" />
        <Menu.Item className="categories" as={NavLink} to={"/is-basvurusu"} name="İş Başvurusu" />
      </Menu>
    </div>
  );
}
