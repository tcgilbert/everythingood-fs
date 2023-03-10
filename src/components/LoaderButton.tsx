import { CgSpinner } from "react-icons/cg";

interface LoadingLinkProps {
  handleOnClick: () => void;
  className: string;
  children: React.ReactNode;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderButton = ({
  handleOnClick,
  className,
  children,
  loading,
  setLoading,
}: LoadingLinkProps) => {
  const handleLoader = () => {
    if (loading) {
      return (
        <span>
          <CgSpinner className="animate-spin text-xl" />
        </span>
      );
    } else {
      return children;
    }
  };

  return (
    <button
      className={className}
      onClick={() => {
        setLoading(true);
        handleOnClick();
      }}
    >
      {handleLoader()}
    </button>
  );
};
