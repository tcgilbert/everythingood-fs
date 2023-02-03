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

  console.log(artGalleries);

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
          return <div key={ele.id}>{ele.name}</div>;
        });
      case "artGalleries":
        return artGalleries.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        });
      case "bakeriesAndDesserts":
        return bakeriesAndDesserts.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        });
      case "groceriesAndLiquor":
        return groceriesAndLiquor.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        });
      default:
        return null;
    }
  };

  return <div className="grid-cols-2 gap-2 lg:grid">{handleContent()}</div>;
};
