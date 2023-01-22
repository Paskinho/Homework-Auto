import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import style from '../../HW11.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '500px',
                height: '4px',
                color: 'blue',
            }} className={style.slider}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
