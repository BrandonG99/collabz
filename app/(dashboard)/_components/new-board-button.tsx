"use client"

import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { Kalam } from "next/font/google";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const font = Kalam({
  subsets: ["latin"],
  weight: ["700"],
});

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;

}

export const NewBoardButton = ({
  orgId,
  disabled,
}: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled"
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  }

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] border-[#2E2E2E] border-[1.5px] rounded-lg hover:bg-[#5fcf4e90] hover:bg-opacity-75 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-90"
      )}
    >
      <div />
      <LayoutDashboard className="h-10 w-10 text-black stroke-1" />
      <p className="text-md text-black font-semibold mt-4">
        New Board
      </p>
    </button>
  )
}