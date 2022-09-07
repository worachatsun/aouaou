import { FC } from 'react'
import Box from '@mui/material/Box';
import { BUTTON_SIZE, BUTTON_TYPE } from './constants'

type a = keyof typeof BUTTON_SIZE

interface ITransparentButton {
    size?: BUTTON_TYPE
}

export const TransparentButton: FC<ITransparentButton> = ({ size = BUTTON_TYPE.M }) => (
    <Box
        sx={{
            ...BUTTON_SIZE[size],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: "1px solid #EBEBEB",
            '&:hover': {
                opacity: [0.9, 0.8, 0.7],
            },
        }}
    >40</Box>
)