import React, { useState } from 'react';
import { ColorPalette } from './components/ColorPalette';
import { ColorThemeSelector } from './components/ColorThemeSelector';
import { MorandiColors } from './constants/Morandi_Colors';
import { LayoutDivider } from './components/LayoutDivider';
import { VintageColors } from './constants/Vintage_Colors';
import { RomanticMediterraneanColors } from './constants/RomanticMediterranean_Colors';
import { PastoralColors } from './constants/Pastoral_Colors';
import { ModernMinimalColors } from './constants/ModernMinimal_Colors';
import { ClassicColors } from './constants/Classic_Colors';
import { RALColors } from './constants/RAL_Colors';
import './App.css';

const colorThemes = {
  'Morandi': MorandiColors,
  'Vintage': VintageColors,
  'RomanticMediterranean': RomanticMediterraneanColors,
  'Pastoral': PastoralColors,
  'ModernMinimal': ModernMinimalColors,
  'Classic': ClassicColors,
  'RAL': RALColors
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(MorandiColors);
  const [themeName, setThemeName] = useState('Morandi');

  const handleThemeChange = (theme: any) => {
    setCurrentTheme(theme);
    setThemeName(Object.keys(colorThemes).find(key => colorThemes[key as keyof typeof colorThemes] === theme) || 'Morandi');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <ColorThemeSelector onThemeChange={handleThemeChange} />
        </div>
        <div className="header-center">
          <h1>{themeName}</h1>
          <p>点击颜色即可复制颜色代码</p>
        </div>
      </header>
      <main>
        <LayoutDivider />
        <ColorPalette currentTheme={currentTheme} />
      </main>
    </div>
  );
}

export default App; 