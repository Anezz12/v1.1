import {
  HomeOutlined,
  PhotoCameraOutlined,
  PeopleOutlined,
  BookmarkOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

export const sidebarLinks = [
  {
    icon: <HomeOutlined sx={{ color: "white", fontSize: "26px" }} />,
    route: "/",
    label: "Home",
  },
  {
    icon: <PhotoCameraOutlined sx={{ color: "white", fontSize: "26px" }} />,
    route: "/create-post",
    label: "Create Post",
  },
  {
    icon: <PeopleOutlined sx={{ color: "white", fontSize: "26px" }} />,
    route: "/people",
    label: "People",
  },
  {
    icon: <BookmarkOutlined sx={{ color: "white", fontSize: "26px" }} />,
    route: "/saved-posts",
    label: "Saved Posts",
  },
  {
    icon: <FavoriteBorderOutlined sx={{ color: "white", fontSize: "26px" }} />,
    route: "/liked-posts",
    label: "Liked Posts",
  },
];

export const pageTitles = [
  {
    url: "/",
    title: "Feed",
  },
  {
    url: "/edit-profile",
    title: "Edit Profile",
  },
  {
    url: "/create-post",
    title: "Create Post",
  },
  {
    url: "/edit-post",
    title: "Edit Post",
  },
  {
    url: "/search",
    title: "Search",
  },
  {
    url: "/search",
    title: "Search",
  },
  {
    url: "/saved-posts",
    title: "Saved Posts",
  },
  {
    url: "/liked-posts",
    title: "Liked Posts",
  },
];

export const tabs = [
  {
    link: "posts",
    name: "Posts",
  },
  {
    link: "followers",
    name: "Followers",
  },
  {
    link: "following",
    name: "Following",
  },
];
