import React from "react";
// import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from "@material-ui/icons/Category";
import CreateIcon from "@material-ui/icons/Create";
import BookIcon from "@material-ui/icons/Book";
import * as AiIcons from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "HeatMap",
    icon: <CategoryIcon />,
    path: "/heatmap",
    cName: "nav-text",
  },
  {
    title: "Point",
    icon: <BookIcon />,
    path: "/point",
    cName: "nav-text",
  },
  {
    title: "Polygon",
    path: "/polygon",
    icon: <CreateIcon />,
    cName: "nav-text",
  },
];
