import React from 'react';
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";

export const SideBarData = [
  {
    title: "My Account",
    icon: <AccountBoxOutlinedIcon />,
    link: "/my-account",
  },
  {
    title: "Orders",
    icon: <EventAvailableOutlinedIcon />,
    link: "/orders",
  },
  {
    title: "Inbox",
    icon: <MoveToInboxOutlinedIcon />,
    link: "/inbox",
  },
  {
    title: "Pending Reviews",
    icon: <RateReviewOutlinedIcon />,
    link: "/pending-reviews",
  },
  {
    title: "Main Market Coupon",
    icon: <StorefrontOutlinedIcon />,
    link: "/coupon",
  },
  {
    title: "Saved Items",
    icon: <FavoriteBorderOutlinedIcon />,
    link: "/saved-items",
  },
  {
    title: "Recently Viewed",
    icon: <HistoryOutlinedIcon />,
    link: "/recently-viewed",
  },
//   {
//     title: "Details",
//     // icon: <Icon />,
//     link: "/",
//   },
//   {
//     title: "Address Book",
//     // icon: <Icon />,
//     link: "/",
//   },
//   {
//     title: "Change Password",
//     // icon: <Icon />,
//     link: "/",
//   },
//   {
//     title: "Newsletter Preferences",
//     // icon: <Icon />,
//     link: "/",
//   },
//   {
//     title: "LOG OUT",
//     // icon: <Icon />,
//     link: "/",
//   },
];

