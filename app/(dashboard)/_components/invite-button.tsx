import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Kalam } from "next/font/google"; 

const font = Kalam({
  subsets: ["latin"],
  weight: ["700"],
})

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={cn(
            "text-md text-black border-[1px] border-black hover:bg-[#5fcf4ebc]",
            // font.className
          )}
        >
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]" >
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};