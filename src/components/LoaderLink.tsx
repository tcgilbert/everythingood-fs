import Link from "next/link";
import { CgSpinner } from "react-icons/cg";

interface LoadingLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderLink = ({
  href,
  className,
  children,
  loading,
  setLoading,
}: LoadingLinkProps) => {
  const handleLoader = () => {
    if (loading) {
      return (
        <span>
          <CgSpinner className="animate-spin text-2xl" />
        </span>
      );
    } else {
      return children;
    }
  };

  return (
    <Link href={href} className={className} onClick={() => setLoading(true)}>
      {handleLoader()}
    </Link>
  );
};
