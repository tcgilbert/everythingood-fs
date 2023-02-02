import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";

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
          return <div key={ele.id}>{ele.name}</div>;
        });
      case "bars":
        return bars.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
        });
      case "cafes":
        return cafes.map((ele) => {
          return <div key={ele.id}>{ele.name}</div>;
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

  return <div className="">{handleContent()}</div>;
};
