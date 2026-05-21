"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //console.log(user);
  const handleSignout = async () => {
    await authClient.signOut();
  };

  const MobileLinks = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/allpets"}>All pets</Link>

        <a>All Pets</a>
      </li>
      <li>
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 bg-base-100 rounded-box w-40 z-[999] shadow">
            <li>
              <Link href={"/dashboard/my-request"}>My request</Link>
            </li>
            <li>
              <Link href={"/dashboard/add-pet"}>Add pet</Link>
            </li>
            <li>
              <Link href={"/dashboard/my-listings"}>My listings</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  const DesktopLinks = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/allpets"}>All pets</Link>
      </li>
      <li>
        <a>My request</a>
      </li>
      <li>
        <Link href={"/dashboard/add-pet"}>Add pet</Link>
      </li>
      <li>
        <a>My listings</a>
      </li>
    </>
  );

  return (
    <div className="bg-[#fff5f0] sticky top-0 z-50 ">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
              >
                {MobileLinks}
              </ul>
            </div>
          </div>
          <Image
            src={"/images/logo 1-01.png"}
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <div className="navbar  hidden lg:flex                                                                         ">
          <ul className="menu menu-horizontal px-1 ">{DesktopLinks}</ul>
        </div>
        <ul className="flex gap-3  justify-end">
          {user ? (
            <div className="flex justify-end items-center gap-5 ">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <li>
                <Button onClick={handleSignout} className={"bg-[#3D6B4F]"}>
                  Sign out
                </Button>
              </li>
            </div>
          ) : (
            <>
              <li>
                <Link href={"/signin"}>
                  <Button className={"bg-[#3D6B4F]"}>Signin</Button>
                </Link>
              </li>
              <li>
                <Link href={"/signup"}>
                  <Button className={"bg-[#3D6B4F]"}>Signup</Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
