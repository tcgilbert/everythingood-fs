import { ArtGallery } from "@prisma/client";
import { BiMap } from "react-icons/bi";

interface Props {
  artGallery: ArtGallery;
}

export const ArtGalleryComponent = (props: Props) => {
  const { artGallery } = props;
  const { name, guide, link } = artGallery;

  return (
    <div className="col-span-1 mb-2 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between">
          <h3 className="font-robo text-2xl font-medium leading-6 text-gray-900">
            {name}
          </h3>
          <a href="" className="text-2xl">
            <BiMap className="hover:text-red-600" />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-2">{link}</div>
        </dl>
      </div>
    </div>
  );
};
