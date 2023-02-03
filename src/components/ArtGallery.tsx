import { ArtGallery } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  artGalleries: ArtGallery[];
}

export const ArtGalleryComponent = (props: Props) => {
  const { artGalleries } = props;

  return (
    <div className=" overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <p>
          For the sake of upkeep, I’m not going to list out shows and
          descriptions of every art gallery here, but I promise you, there is a
          very high chance that any of these galleries will be showing excellent
          artworks at literally any time. They’re linked! Go forth!
        </p>
        <div className="py-1" />
        {artGalleries.map((ele) => {
          return (
            <a
              href={ele.link}
              className="block font-robo text-xl font-medium leading-6 text-gray-900 hover:cursor-pointer hover:text-red-600"
            >
              {" "}
              - {ele.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
