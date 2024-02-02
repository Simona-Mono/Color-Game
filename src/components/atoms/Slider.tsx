import React, { useState } from 'react';

interface SliderProps {
  max: number;
  value: number;
  onChange: (value: number) => void;
}
export default function Slider(props: SliderProps) {
  const [sliderValue, setSliderValue] = useState<number>(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    props.onChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={1}
        max={props.max}
        value={sliderValue}
        onChange={handleChange}
      />
      <div>{sliderValue}</div>
    </div>
  );
  
  };