import iconWebsite from '@/assets/icons/icon-network-website.svg'
import iconFacebook from '@/assets/icons/icon-network-facebook.svg'
import iconInstagram from '@/assets/icons/icon-network-instagram.svg'
import iconKakao from '@/assets/icons/icon-network-kakao.svg'
import iconLinkedIn from '@/assets/icons/icon-network-linkedin.svg'
import iconFacebookFooter from '@/assets/icons/icon-facebook-w.png'
import iconInstagramFooter from '@/assets/icons/icon-instagram-w.png'
import iconKakaoFooter from '@/assets/icons/icon-kakao-w.png'
import iconKGroupFooter from '@/assets/icons/icon-k-group-w.png'
import iconLinkedInFooter from '@/assets/icons/icon-linkedin-w.png'

/** Footer / compact icon links */
export const socialChannels = [
  {
    label: 'Bay Area K-Group',
    href: 'https://bayareakgroup.org/',
    icon: iconKGroupFooter.src,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bayareakgroup/',
    icon: iconFacebookFooter.src,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bayareakgroup/',
    icon: iconInstagramFooter.src,
  },
  {
    label: 'KakaoTalk',
    href: 'https://open.kakao.com/o/gIf6Qpwe',
    icon: iconKakaoFooter.src,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bay-area-k-group/',
    icon: iconLinkedInFooter.src,
  },
] as const

/** Network section cards — order matches prior Figma 561:6411 */
export const networkSocialCards = [
  {
    id: 'website',
    name: 'Website',
    action: 'Visit',
    href: 'https://bayareakgroup.org/',
    icon: iconWebsite.src,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    action: 'Follow',
    href: 'https://www.facebook.com/bayareakgroup/',
    icon: iconFacebook.src,
  },
  {
    id: 'kakao',
    name: 'KakaoTalk',
    action: 'Join',
    href: 'https://open.kakao.com/o/gIf6Qpwe',
    icon: iconKakao.src,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    action: 'Connect',
    href: 'https://www.linkedin.com/company/bay-area-k-group/',
    icon: iconLinkedIn.src,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    action: 'Follow',
    href: 'https://www.instagram.com/bayareakgroup/',
    icon: iconInstagram.src,
  },
] as const
