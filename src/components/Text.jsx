import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { SketchPicker } from 'react-color';

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");
    const [textColor, setTextColor] = useState('#ffffff');
    const [textSize, setTextSize] = useState(16);
    const [previousVal, setPreviousVal] = useState(val);

    const handleDoubleClick = () => {
        setEditMode(true);
    };

    const handleUndo = () => {
        setVal(previousVal); 
        setEditMode(false);
    };

    return (
        <div style={{ fontFamily: "'Rowdies', cursive" }}>
            <Draggable>
                {editMode ? (
                    <input
                        onBlur={() => setEditMode(false)}
                        value={val}
                        onChange={(e) => {
                            setPreviousVal(val);
                            setVal(e.target.value);
                        }}
                        style={{
                            color: 'white',
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none'
                        }}
                    />
                ) : (
                    <h1
                        className='text-white'
                        style={{ color: textColor, fontSize: `${textSize}px` }}
                        onTouchStart={handleDoubleClick} 
                        onDoubleClick={handleDoubleClick}
                    >
                        {val}
                    </h1>
                )}
            </Draggable>

            <div className="flex flex-col mt-4">
                {editMode && (
                    <>
                        <SketchPicker
                            color={textColor}
                            onChangeComplete={(color) => setTextColor(color.hex)}
                        />
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={textSize}
                            onChange={(e) => setTextSize(e.target.value)}
                            style={{margin:"20px"}}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Text;
