import styled, { css } from 'styled-components'
import { resolveMedia } from '../../../utils/helpers'
import { Row, Col } from '../../Grid'
import Button from '../../Button'
import { Anchor } from '../../Anchor'
// svg icons
import WhatsAppImg from '../../../assets/Images/whatsapp.svg'
import PhoneImg from '../../../assets/Images/mobile_phone.svg'
import WebChatImg from '../../../assets/Images/chat.svg'

// Contact Panel Row
const ContactPanelRow = styled(Row)`
  ${resolveMedia.xs`
    ${css`
      & > *:not(:last-child) {
        border-bottom: 1px solid #cbdae0;
      }
    `}
  `}

  ${resolveMedia.md`
    ${css`
      & > *:not(:last-child) {
        border-right: 1px solid #cbdae0;
      }
      & > *:not(:last-child) {
        border-bottom: none;
      }
    `}
  `}
`

// Contact Panel Container
const ContactPanelContainer = styled(Col)`
  ${props => !props.padding && `padding: 0;`}
`

// Individual social media contact column
const ContactPanelColumn = styled(Col)`
  ${props => !props.justify && 'justify-content: center;'}
  ${props => !props.align && 'text-align: center;'}
  ${props => !props.padding && `padding: 24px 15px;`}
`

const FooterButtons = styled(Button)``

// The Icons
const WebChatIcon = styled(WebChatImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.sm`
    width: 100%;
    height: 60px;
    margin: 0 auto 20px;
  `}
`
const WhatsAppIcon = styled(WhatsAppImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.sm`
    width: 100%;
    height: 60px;
    margin: 0 auto 20px;
  `}
`
const PhoneIcon = styled(PhoneImg)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  vertical-align: middle;

  ${resolveMedia.sm`
    width: 100%;
    height: 60px;
    margin: 0 auto 20px;
  `}
`

const Email = styled(Anchor)`
  color: ${({ theme }) => theme.colors.footer.text};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.footer.text};
  }
`

const PhoneNumber = styled(Email)`
  font-weight: 700;
  font-size: 24px;

  ${resolveMedia.sm`
    font-size: 30px
  `};
`

export {
  ContactPanelContainer,
  ContactPanelRow,
  ContactPanelColumn,
  FooterButtons,
  WebChatIcon,
  WhatsAppIcon,
  PhoneIcon,
  Email,
  PhoneNumber,
}
