import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SiCodeforces, SiCodechef,SiLeetcode, SiWhatsapp, SiFacebook } from 'react-icons/si';
import {CgMail} from 'react-icons/cg'
import {BiCopyright} from 'react-icons/bi'


const git1 = <FontAwesomeIcon icon={faGithub} size="1x" />
const li1 = <FontAwesomeIcon icon={faLinkedin} size="1x" />
const insta1 = <FontAwesomeIcon icon={faInstagram} size="1x" />
const git2 = <FontAwesomeIcon icon={faGithub} size="2x" />
const li2 = <FontAwesomeIcon icon={faLinkedin} size="2x" />
const insta2 = <FontAwesomeIcon icon={faInstagram} size="2x" />
const codef1 =  <SiCodeforces />
const codec1 = <SiCodechef/>
const leet1 = <SiLeetcode />
const cgMail = <CgMail/>
const what1 = <SiWhatsapp/>
const face1 = <SiFacebook/>
const copy1 = <BiCopyright />

var icons = {
    "git2":git2,
    "li2":li2,
    "insta2":insta2,
    "git1":git1,
    "li1":li1,
    "insta1":insta1,
    "codef1":codef1,
    "codec1":codec1,
    "leet1":leet1,
    "gmail1":cgMail,
    "what1":what1,
    "face1":face1,
    "copy1":copy1
};

export default icons;