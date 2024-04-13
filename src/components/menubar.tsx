import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navigate, useNavigate } from "react-router-dom";

function MenuBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <BottomNavigation sx={{ width: "100%", position: "absolute", bottom: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="หน้าหลัก"
        value="recents"
        icon={<RestoreIcon />}
        onClick={() => navigate("/home")}
      />
      <BottomNavigationAction
        label="แผนที่"
        value="favorites"
        icon={<FavoriteIcon />}
        onClick={() => navigate("/map")}
      />
      <BottomNavigationAction
        label="เกี่ยวกับ"
        value="nearby"
        icon={<LocationOnIcon />}
        onClick={() => navigate("/about")}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  )
}

export default MenuBar