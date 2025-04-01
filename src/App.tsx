import React from 'react';
import { ColorPalette } from './components/ColorPalette';
import { LayoutDivider } from './components/LayoutDivider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>莫兰迪色板</h1>
        <p>点击颜色即可复制颜色代码</p>
      </header>
      <main>
        
        <LayoutDivider />
        <ColorPalette />
      </main>
    </div>
  );
}

export default App; 