import { BellIcon } from "@heroicons/react/24/outline";

function LayoutNavbar() {
  return (
    <div className="fixed top-1 flex w-full p-3">
      <div className="cursor-pointer space-y-1 rounded-md px-1 py-2">
        <hr className="w-6 border-t-2 border-t-gray-700" />
        <hr className="w-5 border-t-2 border-t-gray-700" />
        <hr className="w-7 border-t-2 border-t-gray-700" />
      </div>

      <div className="ml-auto flex items-center space-x-2">
        <BellIcon className="h-6 w-6 cursor-pointer text-gray-700" />

        <div className="h-9 w-9 cursor-pointer rounded-full border border-primary">
          <img
            className="rounded-full"
            src="profile.jpg"
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutNavbar;
