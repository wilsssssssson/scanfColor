import React, { useState, useRef, useEffect } from 'react';
import { MorandiColors } from '../constants/Morandi_Colors';
import '../styles/LayoutDivider.css';

interface LayoutSection {
    id: string;
    color: string;
    width: number;
    height: number;
    row: number;
    col: number;
}

type PresetLayout = 
    | 'equal' 
    | 'custom' 
    | 'full';

type Direction = 'horizontal' | 'vertical';

export const LayoutDivider: React.FC = () => {
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);
    const [sections, setSections] = useState<LayoutSection[]>(() => {
        const sections: LayoutSection[] = [];
        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 2; col++) {
                sections.push({
                    id: `${row}-${col}`,
                    color: '#ffffff',
                    width: 1,
                    height: 1,
                    row,
                    col
                });
            }
        }
        return sections;
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
    const [dragStartIndex, setDragStartIndex] = useState(0);
    const [dragDirection, setDragDirection] = useState<Direction>('horizontal');
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customRatios, setCustomRatios] = useState('1:1');
    const [drawing_board_fixed, setDrawing_board_fixed] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(MorandiColors);

    const handleThemeChange = (theme: any) => {
        setCurrentTheme(theme);
        // 更新所有区域的颜色，使用主题中的颜色
        const themeColors = Object.values(theme);
        setSections(sections.map((section, index) => ({
            ...section,
            color: themeColors[index % themeColors.length] as string
        })));
    };

    const handleMouseDown = (e: React.MouseEvent, index: number, direction: Direction) => {
        setIsDragging(true);
        setDragStartPos({ x: e.clientX, y: e.clientY });
        setDragStartIndex(index);
        setDragDirection(direction);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const delta = dragDirection === 'horizontal' 
            ? e.clientX - dragStartPos.x 
            : e.clientY - dragStartPos.y;

        const containerSize = dragDirection === 'horizontal'
            ? e.currentTarget.parentElement?.offsetWidth || 0
            : e.currentTarget.parentElement?.offsetHeight || 0;

        const deltaSize = (delta / containerSize) * (dragDirection === 'horizontal' ? cols : rows);

        const newSections = [...sections];
        const affectedSections = sections.filter(section => 
            dragDirection === 'horizontal' 
                ? section.row === Math.floor(dragStartIndex / cols)
                : section.col === dragStartIndex % cols
        );

        const newSize = Math.max(0.5, Math.min((dragDirection === 'horizontal' ? cols : rows) - 0.5, 
            affectedSections[0][dragDirection === 'horizontal' ? 'width' : 'height'] + deltaSize));
        const nextSize = Math.max(0.5, Math.min((dragDirection === 'horizontal' ? cols : rows) - 0.5, 
            affectedSections[1][dragDirection === 'horizontal' ? 'width' : 'height'] - deltaSize));

        affectedSections[0][dragDirection === 'horizontal' ? 'width' : 'height'] = newSize;
        affectedSections[1][dragDirection === 'horizontal' ? 'width' : 'height'] = nextSize;

        setSections(newSections);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleGridSizeChange = (newRows: number, newCols: number) => {
        setRows(newRows);
        setCols(newCols);
        const newSections: LayoutSection[] = [];
        for (let row = 0; row < newRows; row++) {
            for (let col = 0; col < newCols; col++) {
                newSections.push({
                    id: `${row}-${col}`,
                    color: '#ffffff',
                    width: 1,
                    height: 1,
                    row,
                    col
                });
            }
        }
        setSections(newSections);
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
                    width: 1,
                    height: 1
                })));
                break;
            case 'full':
                setSections(sections.map((section, index) => ({
                    ...section,
                    width: section.col === 0 ? cols : 0,
                    height: section.row === 0 ? rows : 0
                })));
                break;
        }
    };

    const handleCustomRatiosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomRatios(e.target.value);
    };

    const applyCustomRatios = () => {
        const ratios = customRatios.split(':').map(Number);
        if (ratios.length !== rows * cols) return;

        const total = ratios.reduce((a, b) => a + b, 0);
        setSections(sections.map((section, index) => ({
            ...section,
            width: (ratios[index] / total) * cols,
            height: (ratios[index] / total) * rows
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

    const DrawingBoardFixed = () => {
        setDrawing_board_fixed(!drawing_board_fixed);
    }

    return (
        <div className="layout-divider">

            <div 
                className={`layout-container ${drawing_board_fixed ? 'fixed' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {sections.map((section, index) => (
                    <React.Fragment key={section.id}>
                        <div 
                            className="layout-section"
                            style={{ 
                                gridColumn: `${section.col + 1} / span 1`,
                                gridRow: `${section.row + 1} / span 1`,
                                backgroundColor: section.color
                            }}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, section.id)}
                        >
                            <div className="section-label">{section.id}</div>
                        </div>
                        {section.col < cols - 1 && (
                            <div 
                                className="resize-handle horizontal"
                                onMouseDown={(e) => handleMouseDown(e, index, 'horizontal')}
                            />
                        )}
                        {section.row < rows - 1 && (
                            <div 
                                className="resize-handle vertical"
                                onMouseDown={(e) => handleMouseDown(e, index, 'vertical')}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="layout-controls">
                <div className="control-group">
                    <label>行数：</label>
                    <select 
                        value={rows}
                        onChange={(e) => handleGridSizeChange(Number(e.target.value), cols)}
                    >
                        {[2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}行</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <label>列数：</label>
                    <select 
                        value={cols}
                        onChange={(e) => handleGridSizeChange(rows, Number(e.target.value))}
                    >
                        {[2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}列</option>
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
                            placeholder={`例如: ${Array(rows * cols).fill('1').join(':')}`}
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
        </div>
    );
};