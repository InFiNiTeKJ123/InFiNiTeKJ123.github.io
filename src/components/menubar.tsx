import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import { Info } from "@mui/icons-material";

function MenuBar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="หน้าหลัก"
        value="home"
        icon={<HomeIcon />}
        onClick={() => navigate("/home")}
      />
      <BottomNavigationAction
        label="แผนที่"
        value="map"
        icon={<LocationOnIcon />}
        onClick={() => navigate("/map")}
      />
      <BottomNavigationAction
        label="เกี่ยวกับ"
        value="about"
        icon={<Info />}
        onClick={() => navigate("/about")}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  )
}

export default MenuBar