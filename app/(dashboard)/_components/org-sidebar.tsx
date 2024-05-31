"use client"

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from 'next/navigation';

import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";


const font = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites")


  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pt-5 pr-4 pl-8 border-r">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image 
            src="/logo.svg"
            alt="logo"
            height={40}
            width={30}
          />
          <span className={cn(
            "font-semibold text-2xl ml-0.5",
            font.className
          )}>
            Collabz
          </span>
        </div>
      </Link>
      <OrganizationSwitcher 
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white"
            }
          }
        }}
      />
      <div className="space-y-1 w-full">
        <Button 
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>
        <Button 
          variant={favorites ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={{
            pathname: "/",
            query: { favorites: true }
          }}>
            <Star className="h-4 w-4 mr-2" />
            Favourite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
};