import React, { useState } from 'react';
import { MorandiColorsI18n } from '../constants/Morandi_Colors_i18n';
import '../styles/ColorPalette.css';
import '../styles/Toast.css';

interface ColorPaletteProps {
    currentTheme: Record<string, string>;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ currentTheme }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<'zh' | 'en'>('zh');
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleColorClick = (color: string) => {
        navigator.clipboard.writeText(color);
        setToastMessage('颜色代码已复制到剪贴板！');
        setTimeout(() => setToastMessage(null), 2000);
    };

    const handleDragStart = (e: React.DragEvent, color: string) => {
        e.dataTransfer.setData('color', color);
        e.dataTransfer.effectAllowed = 'copy';
    };

    return (
        <div className="color-palette">
            <header className="header">
                <div className="language-switch">
                    <button 
                        className={selectedLanguage === 'zh' ? 'active' : ''} 
                        onClick={() => setSelectedLanguage('zh')}
                    >
                        中文
                    </button>
                    <button 
                        className={selectedLanguage === 'en' ? 'active' : ''} 
                        onClick={() => setSelectedLanguage('en')}
                    >
                        English
                    </button>
                </div>
            </header>

            <div className="colors-grid">
                {Object.entries(currentTheme).map(([key, color]) => (
                    <div 
                        key={key}
                        className="color-item"
                        onClick={() => handleColorClick(color)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, color)}
                    >
                        <div 
                            className="color-block"
                            style={{ backgroundColor: color }}
                        />
                        <div className="color-info">
                            <div className="color-name">
                                {MorandiColorsI18n[selectedLanguage][color]}
                            </div>
                            <div className="color-code">{color}</div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedColor && (
                <div className="selected-color-modal">
                    <div className="selected-color-block" style={{ backgroundColor: selectedColor }} />
                    <div className="selected-color-info">
                        <div className="selected-color-name">
                            {MorandiColorsI18n[selectedLanguage][selectedColor]}
                        </div>
                        <div className="selected-color-code">{selectedColor}</div>
                    </div>
                </div>
            )}

            {toastMessage && (
                <div className="toast">
                    <div className="toast-content">
                        <span className="toast-icon">✓</span>
                        <span className="toast-message">{toastMessage}</span>
                    </div>
                    <button 
                        className="toast-close"
                        onClick={() => setToastMessage(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    );
}; 