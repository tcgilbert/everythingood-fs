import { AdminEntry } from "./AdminEntry";
import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

interface AdminContentProps {
  data: {
    restaurants: Restaurant[];
    bars: Bar[];
    cafes: Cafe[];
    shops: Shop[];
    bakeriesAndDesserts: BakeryAndDessert[];
    groceriesAndLiquor: GroceryAndLiquor[];
    artGalleries: ArtGallery[];
  };
  displayed: string;
}

export const AdminContent = ({ data, displayed }: AdminContentProps) => {
  const {
    restaurants,
    bars,
    cafes,
    shops,
    artGalleries,
    bakeriesAndDesserts,
    groceriesAndLiquor,
  } = data;

  const handleContent = () => {
    switch (displayed) {
      case "restaurants":
        return restaurants.map((ele: Restaurant) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "bars":
        return bars.map((ele: Bar) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "cafes":
        return cafes.map((ele: Cafe) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "shops":
        return shops.map((ele: Shop) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "bakeriesAndDesserts":
        return bakeriesAndDesserts.map((ele: BakeryAndDessert) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "groceriesAndLiquor":
        return groceriesAndLiquor.map((ele: GroceryAndLiquor) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      case "artGalleries":
        return artGalleries.map((ele: ArtGallery) => {
          return <AdminEntry key={ele.id} data={ele} />;
        });
      default:
        return null;
    }
  };

  return (
    <div className="mx-2 grid-cols-2 gap-2 lg:grid">{handleContent()}</div>
  );
};
