import React, { useState, useRef, useEffect } from 'react';
import { MorandiColors } from '../constants/Morandi_Colors';
import '../styles/LayoutDivider.css';

interface LayoutSection {
    id: string;
    color: string;
    width: number;
    height: number;
}

type PresetLayout = 
    | 'equal' 
    | 'custom' 
    | 'full';

type Direction = 'horizontal' | 'vertical';

export const LayoutDivider: React.FC = () => {
    const [direction, setDirection] = useState<Direction>('horizontal');
    const [sections, setSections] = useState<LayoutSection[]>(
        Array.from({ length: 2 }, (_, i) => ({
            id: String(i + 1),
            color: '#ffffff',
            width: 1,
            height: 1
        }))
    );
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
    const [dragStartIndex, setDragStartIndex] = useState(0);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customRatios, setCustomRatios] = useState('1:1');
    const [sectionCount, setSectionCount] = useState(2);
    const [drawing_board_fixed, setDrawing_board_fixed] = useState(false);

    const handleMouseDown = (e: React.MouseEvent, index: number) => {
        setIsDragging(true);
        setDragStartPos({ x: e.clientX, y: e.clientY });
        setDragStartIndex(index);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const delta = direction === 'horizontal' 
            ? e.clientX - dragStartPos.x 
            : e.clientY - dragStartPos.y;

        const containerSize = direction === 'horizontal'
            ? e.currentTarget.parentElement?.offsetWidth || 0
            : e.currentTarget.parentElement?.offsetHeight || 0;

        const deltaSize = (delta / containerSize) * sectionCount;

        const newSections = [...sections];
        const newSize = Math.max(0.5, Math.min(sectionCount - 0.5, sections[dragStartIndex][direction === 'horizontal' ? 'width' : 'height'] + deltaSize));
        const nextSize = Math.max(0.5, Math.min(sectionCount - 0.5, sections[dragStartIndex + 1][direction === 'horizontal' ? 'width' : 'height'] - deltaSize));

        newSections[dragStartIndex] = { 
            ...newSections[dragStartIndex], 
            [direction === 'horizontal' ? 'width' : 'height']: newSize 
        };
        newSections[dragStartIndex + 1] = { 
            ...newSections[dragStartIndex + 1], 
            [direction === 'horizontal' ? 'width' : 'height']: nextSize 
        };

        setSections(newSections);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleSectionCountChange = (count: number) => {
        setSectionCount(count);
        setSections(Array.from({ length: count }, (_, i) => ({
            id: String(i + 1),
            color: '#ffffff',
            width: 1,
            height: 1
        })));
        setCustomRatios(Array(count).fill('1').join(':'));
    };

    const applyPresetLayout = (preset: PresetLayout) => {
        if (preset === 'custom') {
            setShowCustomInput(true);
            return;
        }

        setShowCustomInput(false);
        switch (preset) {
            case 'equal':
                setSections(sections.map(section => ({
                    ...section,
                    [direction === 'horizontal' ? 'width' : 'height']: 1
                })));
                break;
            case 'full':
                setSections(sections.map((section, index) => ({
                    ...section,
                    [direction === 'horizontal' ? 'width' : 'height']: index === 0 ? sectionCount : 0
                })));
                break;
        }
    };

    const handleCustomRatiosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomRatios(e.target.value);
    };

    const applyCustomRatios = () => {
        const ratios = customRatios.split(':').map(Number);
        if (ratios.length !== sectionCount) return;

        const total = ratios.reduce((a, b) => a + b, 0);
        setSections(sections.map((section, index) => ({
            ...section,
            [direction === 'horizontal' ? 'width' : 'height']: (ratios[index] / total) * sectionCount
        })));
        setShowCustomInput(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.style.opacity = '0.7';
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.opacity = '1';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, sectionId: string) => {
        e.preventDefault();
        e.currentTarget.style.opacity = '1';
        const color = e.dataTransfer.getData('color');
        if (color) {
            setSections(sections.map(section => 
                section.id === sectionId ? { ...section, color } : section
            ));
        }
    };

    const DrawingBoardFixed =()=>{
        setDrawing_board_fixed(!drawing_board_fixed);
    }

    return (
        <div className="layout-divider">
            <div className="layout-controls">
                <div className="control-group">
                    <label>方向：</label>
                    <select 
                        value={direction}
                        onChange={(e) => setDirection(e.target.value as Direction)}
                    >
                        <option value="horizontal">水平分割</option>
                        <option value="vertical">垂直分割</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>分割份数：</label>
                    <select 
                        value={sectionCount}
                        onChange={(e) => handleSectionCountChange(Number(e.target.value))}
                    >
                        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num}份</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <label>预设：</label>
                    <select 
                        onChange={(e) => applyPresetLayout(e.target.value as PresetLayout)}
                        value={showCustomInput ? 'custom' : 'equal'}
                    >
                        <option value="equal">等份</option>
                        <option value="full">全屏</option>
                        <option value="custom">自定义比例</option>
                    </select>
                </div>

                {showCustomInput && (
                    <div className="custom-ratio-input">
                        <input 
                            type="text" 
                            value={customRatios}
                            onChange={handleCustomRatiosChange}
                            placeholder={`例如: ${Array(sectionCount).fill('1').join(':')}`}
                        />
                        <button onClick={applyCustomRatios}>应用</button>
                    </div>
                )}

                    <div className='drawing_board_fixed'>
                        <button 
                            onClick={DrawingBoardFixed}
                            className={drawing_board_fixed ? 'fixed' : ''}
                        >
                            {drawing_board_fixed ? '取消固定' : '固定画板'}
                        </button>
                    </div>
            </div>
            
            <div 
                className={`layout-container ${direction} ${drawing_board_fixed ? 'fixed' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {sections.map((section, index) => (
                    <React.Fragment key={section.id}>
                        <div 
                            className="layout-section"
                            style={{ 
                                [direction === 'horizontal' ? 'width' : 'height']: `${(section[direction === 'horizontal' ? 'width' : 'height'] / sectionCount) * 100}%`,
                                backgroundColor: section.color
                            }}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, section.id)}
                        >
                        </div>
                        {index < sections.length - 1 && (
                            <div 
                                className={`resize-handle ${direction}`}
                                onMouseDown={(e) => handleMouseDown(e, index)}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};