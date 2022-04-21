import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 100%;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid #6466F1;
  border-radius: 2px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: #6466F1;
  }

  &:focus {
    outline: 3px solid #6466F1;
  }
`,
);

const StyledTextareaElement = styled('textarea')(
    ({ theme }) => `
    width: 100%;
    height: 200px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid #6466F1;
    border-radius: 2px;
    padding: 12px 12px;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: #6466F1;
    }
  
    &:focus {
      outline: 3px solid #6466F1;
    }
  `,
);

const CustomInputMultiline = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <InputUnstyled
            components={{ Input: StyledInputElement, Textarea: StyledTextareaElement }}
            {...props}
            ref={ref}
        />
    );
});

const CustomInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

interface PropsType {
    placeholder: string,
    multiline: boolean
}

export default function UnstyledInputBasic({placeholder,multiline}:PropsType) {
    return multiline ? (
        <CustomInputMultiline aria-label="Demo input" multiline placeholder={placeholder} />
    ) : (<CustomInput aria-label="Demo input" placeholder={placeholder} />)
}
