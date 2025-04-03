import React, { useState } from 'react';
import { MorandiColors } from '../constants/Morandi_Colors';
import { VintageColors } from '../constants/Vintage_Colors';
import { RomanticMediterraneanColors } from '../constants/RomanticMediterranean_Colors';
import { PastoralColors } from '../constants/Pastoral_Colors';
import { ModernMinimalColors } from '../constants/ModernMinimal_Colors';
import { ClassicColors } from '../constants/Classic_Colors';
import { RALColors } from '../constants/RAL_Colors';
import '../styles/ColorThemeSelector.css';

interface ColorThemeSelectorProps {
    onThemeChange: (theme: any) => void;
}

export const ColorThemeSelector: React.FC<ColorThemeSelectorProps> = ({ onThemeChange }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('Morandi');

    const colorThemes = {
        'Morandi': MorandiColors,
        'Vintage': VintageColors,
        'RomanticMediterranean': RomanticMediterraneanColors,
        'Pastoral': PastoralColors,
        'ModernMinimal': ModernMinimalColors,
        'Classic': ClassicColors,
        'RAL': RALColors
    };

    const handleThemeSelect = (theme: string) => {
        setSelectedTheme(theme);
        onThemeChange(colorThemes[theme as keyof typeof colorThemes]);
        setShowPicker(false);
    };

    return (
        <div className="color-theme-selector">
            <button 
                className="theme-button"
                onClick={() => setShowPicker(!showPicker)}
            >
                更换颜色主题
            </button>

            {showPicker && (
                <div className="theme-picker-popup">
                    <div className="theme-picker-header">
                        <h3>选择颜色主题</h3>
                        <button onClick={() => setShowPicker(false)}>关闭</button>
                    </div>
                    <div className="theme-grid">
                        {Object.keys(colorThemes).map(theme => (
                            <div 
                                key={theme}
                                className={`theme-item ${selectedTheme === theme ? 'selected' : ''}`}
                                onClick={() => handleThemeSelect(theme)}
                            >
                                {theme}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}; 