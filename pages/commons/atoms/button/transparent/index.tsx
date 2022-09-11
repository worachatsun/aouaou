import { FC } from 'react'
import Box from '@mui/material/Box';
import { BUTTON_SIZE, BUTTON_TYPE } from './constants'
import { button } from './transparent.styled'

interface ITransparentButton {
    size?: BUTTON_TYPE
}

export const TransparentButton: FC<ITransparentButton> = ({ size = BUTTON_TYPE.M }) => (
    <Box sx={{ ...BUTTON_SIZE[size], ...button }}>40</Box>
)