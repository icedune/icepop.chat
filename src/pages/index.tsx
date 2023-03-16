import Avatar from "@/components/avatar";
import Drawer from "@/components/drawer";
import StatusDot, { Status } from "@/components/status-dot";
import ToggleSwitch from "@/components/toggle-switch";
import {
  ArrowRightOnRectangleIcon,
  AtSymbolIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon as MessagesOutlineIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  MoonIcon,
  PhoneIcon as CallsOutlineIcon,
  PlusIcon,
  StopCircleIcon,
  UserGroupIcon as GroupsOutlineIcon,
  UserPlusIcon as FriendsOutlineIcon
} from "@heroicons/react/24/outline";
import {
  ChatBubbleBottomCenterTextIcon as MessagesSolidIcon,
  PhoneIcon as CallsSolidIcon,
  UserGroupIcon as GroupsSolidIcon,
  UserPlusIcon as FriendsSolidIcon
} from "@heroicons/react/24/solid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tabs from "@radix-ui/react-tabs";
import Head from "next/head";
import {
  useEffect,
  useState,
  type PropsWithChildren,
  type ReactNode
} from "react";

const chats = [
  {
    username: "gana",
    status: Status.Online
  },
  {
    username: "sree",
    status: Status.DnD
  },
  {
    username: "rajvadeghar",
    status: Status.Offline
  },
  {
    username: "vsballa",
    status: Status.Offline
  },
  {
    username: "chatgpt",
    status: Status.Online
  },
  {
    username: "gana",
    status: Status.Online
  },
  {
    username: "sree",
    status: Status.DnD
  },
  {
    username: "rajvadeghar",
    status: Status.Offline
  },
  {
    username: "vsballa",
    status: Status.Offline
  },
  {
    username: "chatgpt",
    status: Status.Online
  }
];

const tabs = [
  {
    value: "messages",
    icons: {
      active: MessagesSolidIcon,
      inactive: MessagesOutlineIcon
    }
  },
  {
    value: "groups",
    icons: {
      active: GroupsSolidIcon,
      inactive: GroupsOutlineIcon
    }
  },
  {
    value: "calls",
    icons: {
      active: CallsSolidIcon,
      inactive: CallsOutlineIcon
    }
  },
  {
    value: "friends",
    icons: {
      active: FriendsSolidIcon,
      inactive: FriendsOutlineIcon
    }
  }
];

type HeaderProps = PropsWithChildren<{
  title: string;
  buttons?: ReactNode;
}>;

const Header: React.FC<HeaderProps> = ({ title, buttons, children }) => {
  return (
    <div className="flex flex-col h-screen p-6 gap-y-4">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-semibold">{title}</span>
        {buttons && <div className="flex">{buttons}</div>}
      </div>
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const username = "vsballa";
  const email = "vsballa.fi@gmail.com";

  const [activeTab, setActiveTab] = useState("messages");
  const [width, setWidth] = useState(
    typeof window === "undefined" ? null : window.innerWidth
  );

  const [statusPickerOpen, setStatusPickerOpen] = useState(false);

  const [showNotifications, setShowNotifications] = useState(true);
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const onChange = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
  }, []);

  return (
    <>
      <Head>
        <title>Ghost</title>
        <meta
          name="description"
          content="Chat with your friends, create communities and automate with bots on Ghost."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs.Root
        className="md:flex"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <Tabs.Content value="messages">
          <Header
            title="Messages"
            buttons={
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="p-1.5 bg-gray-200 rounded-xl">
                  <PlusIcon className="h-6 w-6" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    align="end"
                    sideOffset={5}
                    className="bg-white p-1.5 shadow-xxl rounded-lg"
                  >
                    <DropdownMenu.Item className="hover:bg-gray-200 py-1 px-2 rounded-lg">
                      New chat
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="hover:bg-gray-200 py-1 px-2 rounded-lg">
                      New group
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            }
          >
            <div className="flex flex-col gap-y-1 divide-y pb-40">
              {chats.map((chat, i) => (
                <div className="flex items-center py-2" key={i}>
                  <div className="relative">
                    <Avatar username={chat.username} size={55} />
                    <StatusDot sizePx={14} status={chat.status} />
                  </div>
                  <div className="flex flex-col ml-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        @{chat.username}
                      </span>
                      <span className="text-xs text-gray-500">5:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Hi, John.</span>
                      {/* <MessageDeliveredIcon className="text-green-500 h-5 w-5" /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Header>
        </Tabs.Content>
        <Tabs.Content value="groups">
          <Header title="Groups"></Header>
        </Tabs.Content>
        <Tabs.Content value="calls">
          <Header title="Calls"></Header>
        </Tabs.Content>
        <Tabs.Content value="friends">
          <Header title="Friends"></Header>
        </Tabs.Content>
        <Tabs.List className="flex md:flex-col fixed md:static bottom-0 items-center justify-around md:justify-start gap-y-4 py-3 w-full h-16 md:w-16 md:h-screen md:order-first bg-white shadow-xxl">
          {tabs.map((tab, i) => (
            <Tabs.Trigger
              className="p-2 hover:bg-gray-200 rounded-full"
              value={tab.value}
              key={i}
            >
              {activeTab === tab.value ? (
                <tab.icons.active className="h-6 w-6" />
              ) : (
                <tab.icons.inactive className="h-6 w-6" />
              )}
            </Tabs.Trigger>
          ))}
          <DropdownMenu.Root>
            <div className="relative md:mt-auto">
              <DropdownMenu.Trigger className="block rounded-full overflow-hidden">
                <Avatar username={username} size={35} />
              </DropdownMenu.Trigger>
              <StatusDot sizePx={13} status={Status.Online} />
            </div>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                side={width !== null && width >= 768 ? "right" : "top"}
                sideOffset={10}
                align="end"
                className="bg-white p-2 shadow-xxl rounded-lg w-64"
              >
                <DropdownMenu.Item className="flex items-center p-2">
                  <Avatar username={username} size={45} />
                  <div className="flex flex-col ml-2">
                    <span className="text-lg font-medium">@{username}</span>
                    <span className="text-gray-500">{email}</span>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-0.5 bg-gray-200 m-2" />
                <DropdownMenu.CheckboxItem
                  className="flex items-center hover:bg-gray-200 p-2 rounded-lg w-full"
                  checked={showNotifications}
                  onCheckedChange={setShowNotifications}
                >
                  <BellAlertIcon className="h-5 w-5 text-gray-500" />
                  <div className="ml-2 flex grow items-center justify-between">
                    Show notifications
                    <ToggleSwitch
                      checked={showNotifications}
                      onCheckedChange={setShowNotifications}
                    />
                  </div>
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  className="flex items-center hover:bg-gray-200 p-2 rounded-lg w-full"
                  checked={incognitoMode}
                  onCheckedChange={setIncognitoMode}
                >
                  <GlobeAltIcon className="h-5 w-5 text-gray-500" />
                  <div className="ml-2 flex grow items-center justify-between">
                    Incognito mode
                    <ToggleSwitch
                      checked={incognitoMode}
                      onCheckedChange={setIncognitoMode}
                    />
                  </div>
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  className="flex items-center hover:bg-gray-200 p-2 rounded-lg w-full"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                >
                  <MoonIcon className="h-5 w-5 text-gray-500" />
                  <div className="ml-2 flex grow items-center justify-between">
                    Dark mode
                    <ToggleSwitch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.Separator className="h-0.5 bg-gray-200 m-2" />
                <DropdownMenu.Item className="flex items-center hover:bg-gray-200 p-2 rounded-lg w-full">
                  <AtSymbolIcon className="h-5 w-5 text-gray-500" />
                  <span className="ml-2">Update username</span>
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  onSelect={(e) => {
                    e.preventDefault();
                    setStatusPickerOpen(true);
                  }}
                >
                  <Drawer
                    open={statusPickerOpen}
                    onOpenChange={setStatusPickerOpen}
                    title="Update status"
                    trigger={
                      <button className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-lg w-full">
                        <span className="flex items-center">
                          <StopCircleIcon className="h-5 w-5 text-gray-500" />
                          <span className="ml-2">Update status</span>
                        </span>
                        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                      </button>
                    }
                    body={
                      <div className="flex flex-col gap-y-1 m-2 p-2 bg-gray-100">
                        <button className="p-1 text-left bg-gray-200">
                          Online
                        </button>
                        <button className="p-1 text-left bg-gray-200">
                          Do not disturb
                        </button>
                        <button className="p-1 text-left bg-gray-200">
                          Offline
                        </button>
                      </div>
                    }
                  />
                </DropdownMenu.Item>

                <DropdownMenu.Item className="flex items-center hover:bg-gray-200 p-2 rounded-lg w-full">
                  <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-500" />
                  <span className="ml-2">Log out</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export default Home;
