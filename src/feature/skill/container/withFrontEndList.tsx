import React from 'react'
import Grid from '@mui/material/Grid';
import Javascript from '../../../images/javascript.webp'
import ReactImg from '../../../images/react_icon.svg'
import ReduxIcon from '../../../images/redux-icon.webp'
import CssIcon from '../../../images/css-icon.jpeg'
import HtmlIcon from '../../../images/html-icon.webp'
import ReactNativeIcon from '../../../images/react-native-icon.png'
import TypeScriptImg from '../../../images/typescript-icon.jpeg'
import MateriaUiImg from '../../../images/materiaUI-icon.avif'
import TailwindImg from '../../../images/tailwindcss-icon.png'
import GsapIcon from '../../../images/gsap-icon.png'
import NativeBaseIcon from '../../../images/nativebase-icon.png'
import Card from '../components/card'
export default function withFrontEndList() {
    return (
        <Grid className='grid grid-cols-3 pl-6'>
            <Card imgUrl={ReactImg} text="ReactJs" />
            <Card imgUrl={ReactNativeIcon} text="ReactNative" />
            <Card imgUrl={ReduxIcon} text="Redux" />
            <Card imgUrl={TypeScriptImg} text="TypeScript" />
            <Card imgUrl={Javascript} text="Javascript" />
            <Card imgUrl={CssIcon} text="Css" />
            <Card imgUrl={HtmlIcon} text="Html" />
            <Card imgUrl={MateriaUiImg} text="MateriaUI" />
            <Card imgUrl={TailwindImg} text="Tailwindcss" />
            <Card imgUrl={GsapIcon} text="Gsap" />
            <Card imgUrl={NativeBaseIcon} text="NatveBase" />
        </Grid>
    )
}
