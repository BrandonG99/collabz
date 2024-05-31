import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image 
        src="/elements.svg"
        alt="empty organisation image"
        height={200}
        width={200}
      />
      <h2 className="text-2xl font-semibold mt-6">
        Welcome to <span className="text-[#000000] font-bold">Collabz</span>
      </h2>
      <p className="text-muted-foreground text-sm mt-4">
        An interactive collaborative whiteboard that updates in realtime.
      </p>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organisation to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#3b7f48] hover:bg-[#000000]"
              size="lg"
            >
              Create Organisation
            </Button>
          </DialogTrigger>
          <DialogContent className="items-center justify-center py-8 max-w-[480px]">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};