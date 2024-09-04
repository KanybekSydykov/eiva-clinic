import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
    background:'rgba(46, 133, 135, 1)',
    color: 'white',
    borderRadius: '60px',
    width:'100%',
    maxWidth:'358px',
    padding:'15px 0',
    height:'auto',
    fontFamily: 'var(--chakra-fonts-mulish)',
    fontWeight: '700',
    fontSize: '18px',
    transition: 'transform .3s, box-shadow .3s',
    transformStyle: 'preserve-3d',
    _hover:{
      transform:"translate3d(0, -3px, .01px)",
      boxShadow:'0 2px 5px 0 rgba(46, 133, 135, .5), 0 2px 10px 0 rgba(46, 133, 135, .12)',
    }
})

const brandSecondary = defineStyle({
  background:'#fff',
  color: 'darkGreen',
  borderRadius: '60px',
  width:'100%',
  maxWidth:'358px',
  padding:'15px 0',
  height:'auto',
  border: '1px solid rgba(19, 114, 118, 0.4)',
  fontFamily: 'var(--chakra-fonts-mulish)',
  fontWeight: '700',
  fontSize: '18px',
  transition: 'transform .3s, box-shadow .3s',
  transformStyle: 'preserve-3d',
  _hover:{
    transform:"translate3d(0, -3px, .01px)",
    boxShadow:'0 2px 5px 0 rgba(19, 114, 118, 0.4), 0 2px 10px 0 rgba(19, 114, 118, 0.12)',

  }

})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary , brandSecondary},
})
