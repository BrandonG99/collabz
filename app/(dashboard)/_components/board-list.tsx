"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface BoardListProps {
  orgId: string,
  query: {
    search?: string,
    favorites?: string,
  };
};

export const BoardList = ({
  orgId,
  query,
}: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId,
  ...query,
  });

  // if data is loading
  if (data === undefined) {
    return (
      <div>
        <h2 className={cn(
          "text-3xl text-[#2e2e2e] font-semibold",
          font.className
        )}>
          {query.favorites ? "Favourite Boards" : "All Team Boards"}
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    )
  }

  if (!data?.length && query.search) {
    return <EmptySearch />
  };

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  };

  if(!data?.length) {
    return <EmptyBoards />
  }

  return (
    <div>
        <h2 className={cn(
          "text-3xl text-[#2e2e2e] font-semibold",
          font.className
        )}>
        {query.favorites ? "Favourite Boards" : "All Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />

        {data?.map((board) => (
          <BoardCard 
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            // authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};