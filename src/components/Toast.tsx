import React, { useEffect } from 'react';
import '../styles/Toast.css';

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 2000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="toast">
            <div className="toast-content">
                <span className="toast-icon">✓</span>
                <span className="toast-message">{message}</span>
            </div>
            <button className="toast-close" onClick={onClose}>×</button>
        </div>
    );
}; 