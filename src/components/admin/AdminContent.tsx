import { AdminEntry } from "./AdminEntry";
import { AdminRestaurant } from "./AdminRestaurant";
import { AdminBar } from "./AdminBar";
import {
  ArtGallery,
  BakeryAndDessert,
  Bar,
  Cafe,
  GroceryAndLiquor,
  Restaurant,
  Shop,
} from "@prisma/client";

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
  refetch: () => void;
}

export const AdminContent = ({
  data,
  displayed,
  refetch,
}: AdminContentProps) => {
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
          return <AdminRestaurant key={ele.id} data={ele} refetch={refetch} />;
        });
      case "bars":
        return bars.map((ele: Bar) => {
          return <AdminBar refetch={refetch} key={ele.id} data={ele} />;
        });
      case "cafes":
        return cafes.map((ele: Cafe) => {
          return <AdminEntry type={"cafes"} key={ele.id} data={ele} />;
        });
      case "shops":
        return shops.map((ele: Shop) => {
          return <AdminEntry type={"shops"} key={ele.id} data={ele} />;
        });
      case "bakeriesAndDesserts":
        return bakeriesAndDesserts.map((ele: BakeryAndDessert) => {
          return (
            <AdminEntry type={"bakeriesAndDesserts"} key={ele.id} data={ele} />
          );
        });
      case "groceriesAndLiquor":
        return groceriesAndLiquor.map((ele: GroceryAndLiquor) => {
          return (
            <AdminEntry type={"groceriesAndLiquor"} key={ele.id} data={ele} />
          );
        });
      case "artGalleries":
        return artGalleries.map((ele: ArtGallery) => {
          return <AdminEntry type={"artGalleries"} key={ele.id} data={ele} />;
        });
      default:
        return null;
    }
  };

  return (
    <div className="mx-2 grid-cols-2 gap-2 lg:grid">{handleContent()}</div>
  );
};
