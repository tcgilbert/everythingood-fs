import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";

import { RestaurantComponent } from "../components/Restaurant";
import { BarComponent } from "../components/Bar";
import { CafeComponent } from "../components/Cafe";
import { BakeryAndDessertComponent } from "../components/BakeryAndDessert";
import { ShopComponent } from "../components/Shop";
import { GroceryAndLiquorComponent } from "../components/GroceryAndLiquor";
import { ArtGalleryComponent } from "../components/ArtGallery";

interface Props {
  displayed: string;
  data: {
    restaurants: Restaurant[];
    bars: Bar[];
    cafes: Cafe[];
    shops: Shop[];
    artGalleries: ArtGallery[];
    bakeriesAndDesserts: BakeryAndDessert[];
    groceriesAndLiquor: GroceryAndLiquor[];
  };
}

export const GuideContent = (props: Props) => {
  const {
    restaurants,
    bars,
    cafes,
    shops,
    artGalleries,
    bakeriesAndDesserts,
    groceriesAndLiquor,
  } = props.data;

  if (props.displayed === "artGalleries") {
    return <ArtGalleryComponent artGalleries={artGalleries} />;
  }

  const handleContent = () => {
    switch (props.displayed) {
      case "restaurants":
        return restaurants.map((ele) => {
          return <RestaurantComponent key={ele.id} restaurant={ele} />;
        });
      case "bars":
        return bars.map((ele) => {
          return <BarComponent key={ele.id} bar={ele} />;
        });
      case "cafes":
        return cafes.map((ele) => {
          return <CafeComponent key={ele.id} cafe={ele} />;
        });
      case "shops":
        return shops.map((ele) => {
          return <ShopComponent key={ele.id} shop={ele} />;
        });
      case "bakeriesAndDesserts":
        return bakeriesAndDesserts.map((ele) => {
          return (
            <BakeryAndDessertComponent key={ele.id} bakeryAndDessert={ele} />
          );
        });
      case "groceriesAndLiquor":
        return groceriesAndLiquor.map((ele) => {
          return (
            <GroceryAndLiquorComponent key={ele.id} groceryAndLiquor={ele} />
          );
        });
      default:
        return null;
    }
  };

  return <div className="grid-cols-2 gap-2 lg:grid">{handleContent()}</div>;
};
