import React, { useState } from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';
import provinces_thai_name from '../config/config';
import SearchIcon from '@mui/icons-material/Search'; // Import the SearchIcon

// function SearchBar(props : any) {

//   const [value, setValue] = useState('');

//   const handlechange = (event : any, newvalue: any) => {
//     props.set_place_EN(newvalue)
//   }

//   return (
//     <Box>
//         <Autocomplete
//         disablePortal
//         freeSolo
//         id="provinces"
//         options={provinces_region}
//         groupBy={(option) => option.region} // Group by year as string
//         // getOptionLabel={(option) => `${option.name} - ${option.region}`}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Search" variant='filled' sx={{ backgroundColor: 'white'}}/>}
//         value={props.place_EN}
//         onChange={handlechange}
//         />
//     </Box>
//   )
// }

// export default SearchBar
interface ProvinceRegion {
    label: string;
    region: string;
  }

export const provinces_region: ProvinceRegion[] = [
    { label: "Chiang Mai", region: "North" },
    { label: "Chiang Rai", region: "North" },
    { label: "Lampang", region: "North" },
    { label: "Lamphun", region: "North" },
    { label: "Mae Hong Son", region: "North" },
    { label: "Nan", region: "North" },
    { label: "Phayao", region: "North" },
    { label: "Phare", region: "North" },
    { label: "Uttaradit", region: "North" },
    // North-east
    { label: "Kalasin", region: "North-East" },
    { label: "Khon Kaen", region: "North-East" },
    { label: "Chaiyaphum", region: "North-East" },
    { label: "Nakhon Phanom", region: "North-East" },
    { label: "Nakhon Ratchasima", region: "North-East" },
    { label: "Bueng Kan", region: "North-East" },
    { label: "Buriram", region: "North-East" },
    { label: "Maha Sarakham", region: "North-East" },
    { label: "Mukdahan", region: "North-East" },
    { label: "Yasothon", region: "North-East" },
    { label: "Roi Et", region: "North-East" },
    { label: "Loei", region: "North-East" },
    { label: "Sakon Nakhon", region: "North-East" },
    { label: "Surin", region: "North-East" },
    { label: "Nong Khai", region: "North-East" },
    { label: "Nong Bua Lamphu", region: "North-East" },
    { label: "Udon Thani", region: "North-East" },
    { label: "Ubon Ratchathani", region: "North-East" },
    { label: "Amnat Charoen", region: "North-East" },
    // Central
    { label: "Bangkok", region: "Central" },
    { label: "Kamphaeng Phet", region: "Central" },
    { label: "Chai Nat", region: "Central" },
    { label: "Nakhon Nayok", region: "Central" },
    { label: "Nakhon Pathom", region: "Central" },
    { label: "Nakhon Sawan", region: "Central" },
    { label: "Nonthaburi", region: "Central" },
    { label: "Phra Nakhon Si Ayutthaya", region: "Central" },
    { label: "Phichit", region: "Central" },
    { label: "Phitsanulok", region: "Central" },
    { label: "Phetchabun", region: "Central" },
    { label: "Lopburi", region: "Central" },
    { label: "Samut Prakan", region: "Central" },
    { label: "Samut Songkhram", region: "Central" },
    { label: "Samut Sakhon", region: "Central" },
    { label: "Sing Buri", region: "Central" },
    { label: "Sukhothai", region: "Central" },
    { label: "Suphan Buri", region: "Central" },
    { label: "Saraburi", region: "Central" },
    { label: "Ang Thong", region: "Central" },
    { label: "Uthai Thani", region: "Central" },
    // East
    { label: "Chanthaburi", region: "East" },
    { label: "Chachoengsao", region: "East" },
    { label: "Chonburi", region: "East" },
    { label: "Trat", region: "East" },
    { label: "Prachinburi", region: "East" },
    { label: "Rayong", region: "East" },
    { label: "Sa Kaeo", region: "East" },
    // West
    { label: "Kanchanaburi", region: "West" },
    { label: "Tak", region: "West" },
    { label: "Prachuap Khiri Khan", region: "West" },
    { label: "Phetchaburi", region: "West" },
    { label: "Ratchaburi", region: "West" },
    // South
    { label: "Krabi", region: "South" },
    { label: "Chumphon", region: "South" },
    { label: "Trang", region: "South" },
    { label: "Nakhon Si Thammarat", region: "South" },
    { label: "Narathiwat", region: "South" },
    { label: "Pattani", region: "South" },
    { label: "Phang Nga", region: "South" },
    { label: "Phatthalung", region: "South" },
    { label: "Phuket", region: "South" },
    { label: "Ranong", region: "South" },
    { label: "Satun", region: "South" },
    { label: "Songkhla", region: "South" },
    { label: "Surat Thani", region: "South" },
    { label: "Yala", region: "South" },
];


