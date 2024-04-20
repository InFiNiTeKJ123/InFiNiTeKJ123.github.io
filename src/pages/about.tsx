import { Box, Typography } from "@mui/material"
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/Email';

function About() {
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '7vh', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Box component='img' sx={{ height: '40vh' }}
                    src="https://thumbs.dreamstime.com/b/contact-us-call-mail-icons-contact-us-call-mail-icons-white-background-vector-illustration-117513360.jpg" />
                <Typography variant='h5' sx={{ fontWeight: 'bold', fontsize: '30px', paddingTop: '3vh', paddingBottom: '3vh' }}>
                    ช่องทางการติดต่อ
                </Typography>
                <Box sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', width: 'auto', padding: '2vh ', borderRadius: '2vh', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', }}>
                    <Typography variant='h6' sx={{ color: 'white'}}>
                        Nutcharee Kongtyuang
                        <br />
                        <CallRoundedIcon sx={{ marginRight: '1vh'}} />
                        087-2948188
                        <br />
                        <EmailIcon /> Nutcharee.Kongtyuang@gmail.com
                    </Typography>
                </Box>
                <Box sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', width: '355px', padding: '2vh', marginTop: '1vh', borderRadius: '2vh', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', }}>
                    <Typography variant='h6' sx={{ color: 'white'}}>
                        Thanaphon Petduangjan
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'white'}}>
                        <CallRoundedIcon sx={{ marginRight: '1vh'}}/>
                            095-1049407
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'white'}}>
                        <EmailIcon sx={{ marginRight: '1vh'}}/> 
                        pccnst20302@gmail.com
                    </Typography>
                        

                </Box>
            </Box>

        </Box>
    )
}
export default About