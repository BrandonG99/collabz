import { List } from "./list"
import { NewButton } from "./new-button"

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 border-r-[2px] border-black h-full w-[70px] flex p-[11px] pt-4 flex-col gap-y-5 text-white">
      <List />
      <NewButton />
    </aside>
  );
};