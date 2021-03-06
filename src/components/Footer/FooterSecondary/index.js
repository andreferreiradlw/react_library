import React, { useContext } from 'react'
import {
  genericPropTypes,
  genericPropsDefaults,
} from '../../../utils/prop-types'
import {
  FooterRow,
  FooterSecondaryContainer,
  Translation,
  Acessibility,
  AccessibilityIcon,
  MapsText,
  MapsLink,
  ListContainer,
  FooterSecondaryList as List,
  FooterSecondaryListItem as ListItem,
  FooterAnchor as A,
} from './StyledFooterSecondary'
// svg
import MapsLogoEn from '../../../assets/Images/maps_logo_en.svg'
// context
import LocaleContext from '../LocaleContext'

const FooterSecondary = ({ lngUrl, setLng }) => {
  let { translation, accessibility, maps_logo, list_items } = useContext(
    LocaleContext
  ).FooterSecondary

  return (
    <FooterRow justify="center" padding="0">
      <FooterSecondaryContainer
        direction="row"
        justify="space-between"
        align="center"
        constrained
      >
        <ListContainer direction="row" align="center" padding="0">
          <Translation sizes="auto">
            <A href={lngUrl} onClick={setLng}>
              {translation}
            </A>
          </Translation>
          <Acessibility sizes="auto">
            <A
              onClick={() =>
                window.open(
                  `http://accessin.org/usersubmit_mas.php?param=${window.location}`,
                  '',
                  'resizable=yes,location=no,scrollbars=yes,toolbar=no,left=20,top=0,height=900,width=800'
                )
              }
              href="http://accessin.org/usersubmit_mas.php?param=nojscript"
              target="_blank"
              title="Please use this button to tell us if you have an accessibility issue on our website"
            >
              <AccessibilityIcon />
              {accessibility}
            </A>
          </Acessibility>
          <MapsLink sizes={{ xs: 12, sm: 'auto' }}>
            <A>
              <MapsText>
                <span>{maps_logo.text_1}</span>
                <span>{maps_logo.text_2}</span>
                <span>{maps_logo.text_3}</span>
              </MapsText>
              <MapsLogoEn />
            </A>
          </MapsLink>
        </ListContainer>

        <ListContainer sizes={{ xs: 12, lg: 'auto' }}>
          <List>
            {list_items.map(({ href, text }, key) => (
              <ListItem key={key}>
                <A href={href}>{text}</A>
              </ListItem>
            ))}
          </List>
        </ListContainer>
      </FooterSecondaryContainer>
    </FooterRow>
  )
}

FooterSecondary.prototypes = {
  ...genericPropTypes,
}
FooterSecondary.defaultProps = {
  ...genericPropsDefaults(),
}

export default FooterSecondary
