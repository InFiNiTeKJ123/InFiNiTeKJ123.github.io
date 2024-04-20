const provinces_thai_name: Record<string, string> = {
    // North
    "Chiang Mai": "เชียงใหม่",
    "Chiang Rai": "เชียงราย",
    "Lampang": "ลำปาง",
    "Lamphun": "ลำพูน",
    "Mae Hong Son": "แม่ฮ่องสอน",
    "Nan": "น่าน",
    "Phayao": "พะเยา",
    "Phrae": "แพร่",
    "Uttaradit": "อุตรดิตถ์",
    // Northeast
    'Kalasin': 'กาฬสินธุ์',
    'Khon Kaen': 'ขอนแก่น',
    'Chaiyaphum': 'ชัยภูมิ',
    'Nakhon Phanom': 'นครพนม',
    'Nakhon Ratchasima': 'นครราชสีมา',
    'Bueng Kan': 'บึงกาฬ',
    'Buriram': 'บุรีรัมย์',
    'Maha Sarakham': 'มหาสารคาม',
    'Mukdahan': 'มุกดาหาร',
    'Yasothon': 'ยโสธร',
    'Roi Et': 'ร้อยเอ็ด',
    'Loei': 'เลย',
    'Sakon Nakhon': 'สกลนคร',
    'Surin': 'สุรินทร์',
    'Sisaket': 'ศรีสะเกษ',
    'Nong Khai': 'หนองคาย',
    'Nong Bua Lamphu': 'หนองบัวลำภู',
    'Udon Thani': 'อุดรธานี',
    'Ubon Ratchathani': 'อุบลราชธานี',
    'Amnat Charoen': 'อำนาจเจริญ',
    // central
    'Bangkok': 'กรุงเทพมหานคร',
    'Kamphaeng Phet': 'กำแพงเพชร',
    'Chai Nat': 'ชัยนาท',
    'Nakhon Nayok': 'นครนายก',
    'Nakhon Pathom': 'นครปฐม',
    'Nakhon Sawan': 'นครสวรรค์',
    'Nonthaburi': 'นนทบุรี',
    'Pathum Thani': 'ปทุมธานี',
    'Phra Nakhon Si Ayutthaya': 'พระนครศรีอยุธยา',
    'Phichit': 'พิจิตร',
    'Phitsanulok': 'พิษณุโลก',
    'Phetchabun': 'เพชรบูรณ์',
    'Lopburi': 'ลพบุรี',
    'Samut Prakan': 'สมุทรปราการ',
    'Samut Songkhram': 'สมุทรสงคราม',
    'Samut Sakhon': 'สมุทรสาคร',
    'Sing Buri': 'สิงห์บุรี',
    'Sukhothai': 'สุโขทัย',
    'Suphan Buri': 'สุพรรณบุรี',
    'Saraburi': 'สระบุรี',
    'Ang Thong': 'อ่างทอง',
    'Uthai Thani': 'อุทัยธานี',
    // east
    'Chanthaburi': 'จันทบุรี',
    'Chachoengsao': 'ฉะเชิงเทรา',
    'Chonburi': 'ชลบุรี',
    'Trat': 'ตราด',
    'Prachinburi': 'ปราจีนบุรี',
    'Rayong': 'ระยอง',
    'Sa Kaeo': 'สระแก้ว',
    // west
    'Kanchanaburi': 'กาญจนบุรี',
    'Tak': 'ตาก',
    'Prachuap Khiri Khan': 'ประจวบคีรีขันธ์',
    'Phetchaburi': 'เพชรบุรี',
    'Ratchaburi': 'ราชบุรี',
    // south
    'Krabi': 'กระบี่',
    'Chumphon': 'ชุมพร',
    'Trang': 'ตรัง',
    'Nakhon Si Thammarat': 'นครศรีธรรมราช',
    'Narathiwat': 'นราธิวาส',
    'Pattani': 'ปัตตานี',
    'Phang Nga': 'พังงา',
    'Phatthalung': 'พัทลุง',
    'Phuket': 'ภูเก็ต',
    'Ranong': 'ระนอง',
    'Satun': 'สตูล',
    'Songkhla': 'สงขลา',
    'Surat Thani': 'สุราษฎร์ธานี',
    'Yala': 'ยะลา',
}

export const formatDate = (dateString: any) => {
    // Create a Date object from the original string
    const date = new Date(dateString);
  
    // Extract year, month (0-indexed), and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
  
    // Format the date in the desired format
    const formattedDate = `${day}/${month}/${year}`;
  
    // Extract hours and minutes from the time part (optional)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    // Combine formatted date and time (if needed)
    const formattedDateTime = `${formattedDate} ${hours}:${minutes}`;
  
    return formattedDateTime; // Return formatted date or date-time
  }
export const API_KEY='5CB344BB87DC4A218B4AF85EE83860AA'

export default provinces_thai_name;
