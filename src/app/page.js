import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
     <Banner></Banner>
    <ToastContainer />
    </div>
  );
}
