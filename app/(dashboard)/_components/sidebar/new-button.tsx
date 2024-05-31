"use client"

import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog';
import { Hint } from '@/components/hint';

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint 
            label="Create organisation"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-[#5fcf4e] h-full w-full rounded-md flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <Plus className="text-black" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="items-center justify-center py-8">
        <CreateOrganization routing="hash" />
      </DialogContent>
    </Dialog>
  );
};