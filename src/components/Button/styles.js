import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  display: 'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',
  gap:'10px',
  marginTop:'2vh',

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    color: {
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
  },
  compoundVariants: [
    {
      color: 'violet',
      outlined: true,
      css: {
        color: 'blueviolet',
        borderColor: 'darkviolet',
        backgroundColor: 'transparent',
        '&:hover': {
          color: 'white',
        },
      },
    },
    {
      color: 'gray',
      outlined: true,
      css: {
        color: 'gray',
        backgroundColor: 'transparent',
        borderColor: 'lightgray',
        '&:hover': {
          color: 'black',
          cursor: 'pointer',
        },
      },
    },
  ],
  defaultVariants: {
    color: 'violet',
    outlined: false,
  }

});