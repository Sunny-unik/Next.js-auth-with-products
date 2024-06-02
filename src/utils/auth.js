import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login");
      } else {
        const user = jwtDecode(token);
        if (!user) {
          router.push("/auth/login");
        }
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
