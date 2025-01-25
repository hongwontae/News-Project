import "../globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata = {
  title: "P-News",
  description: "Personal News-Page",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <MainHeader></MainHeader>
      {children}
    </>
  );
}
