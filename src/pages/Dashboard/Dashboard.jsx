import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import { destroyToken } from "../../utils/axiosRequest";
import { Menu } from "antd";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Dashboard = () => {
  const navigate = useNavigate()
  let menuList = [
    {
      id: 1,
      icon: <DashboardOutlinedIcon style={{fontSize: 30}} />,
      label: "Home",
      path: "/dashboard",
    },
    {
      id: 2,
      icon: <GroupsOutlinedIcon style={{fontSize: 30}} />,
      label: "All Users",
      path: "users",
    },
    {
      id: 3,
      icon: <CategoryOutlinedIcon style={{fontSize: 30}} />,
      label: "Categories",
      path: "categories",
    },
    {
      id: 4,
      icon: <SellOutlinedIcon style={{fontSize: 30}} />,
      label: "Orders",
      path: "orders",
    },
    {
      id: 5,
      icon: <BusinessCenterOutlinedIcon style={{fontSize: 30}} />,
      label: "Products",
      path: "products",
    },
  ];
  return (
    <div className="bg-white ">
      <div className=" border-b border-[#EBEBEC] bg-white  fixed top-0 w-full z-50">
        <div className="container mx-auto ">
          <div className="h-20 flex items-center justify-between ">
            <div className=" flex items-center gap-2 text-[#B0B5BB]">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-3xl font-bold"
              >
                <img src={logo} alt="" />
              </Link>
            </div>
            <button className=" font-semibold text-xl py-2 px-6 bg-[#FFC83B] active:bg-[#ffc01f] hover:bg-[#ffc01f6e] rounded-xl" onClick={()=>{
              destroyToken()
              navigate("/")
            }}>
             <LogoutIcon/> Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
      <div className="w-[280px] bg-white border-r text-[#B0B5BB] border-[#EBEBEC] h-[100vh] fixed top-[81px] z-50 overflow-auto overscroll-contain">
        <div className="container mx-auto">
            <Menu theme="light" className="pt-20 space-y-2" mode="inline" defaultSelectedKeys={["1"]}>
          {menuList.map((elem) => {
            return (
              <Menu.Item key={elem.id} icon={elem.icon} className='font-medium text-xl p-6 flex gap-5 text-[#676F7F]' onClick={() => navigate(elem.path)}>
                {elem.label}
              </Menu.Item>
            );
          })}
        </Menu>
        </div>
      </div>
      <div className="py-14 px-5 pl-[305px] basis-full mt-20 bg-[#F5F5F5]">
        <div className="bg-white min-h-[360px] p-6">
      <Outlet  />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
