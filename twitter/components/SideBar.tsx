import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon
} from "@heroicons/react/outline"
import SideBarRow from './SideBarRow'

function SideBar() {
  return (
    <div className="">
        <img src="https://links.papareact.com/drq" className="h-10 w-10" alt="" />
        <SideBarRow Icon={HomeIcon}  title={"Home"} />
        <SideBarRow Icon={HashtagIcon}  title={"Explore"} />
        <SideBarRow Icon={BellIcon}  title={"Notifications"} />
        <SideBarRow Icon={MailIcon}  title={"Messages"} />
        <SideBarRow Icon={BookmarkIcon}  title={"Bookmarks"} />
        <SideBarRow Icon={CollectionIcon}  title={"Lists"} />
    </div>
  )
}

export default SideBar