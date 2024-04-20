import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import { Explore, Info } from "@mui/icons-material";

function MenuBar(props: any) {
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    props.set_current_page(newValue)
  };

  const navigate = useNavigate();

  return (
    <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: 0 }} value={props.current_page} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        onClick={() => navigate("/home")}
      />
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<Explore />}
        onClick={() => navigate("/explore")}
      />
      <BottomNavigationAction
        label="Map"
        value="map"
        icon={<LocationOnIcon />}
        onClick={() => navigate("/map")}
      />
      <BottomNavigationAction
        label="Contact"
        value="about"
        icon={<Info />}
        onClick={() => navigate("/about")}
      />
    </BottomNavigation>
  )
}

export default MenuBar