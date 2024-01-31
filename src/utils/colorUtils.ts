// Generate a random color in HEX format
export const randomColor = (): string => {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
};

// Convert HEX color to RGB format
export const hexToRgb = (hex: string): string => {
    // check if HEX color is valid
    if (/^#([a-f0-9]{3}){1,2}$/i.test(hex)) {
        if (hex.length === 4) {
            hex = '#' + hex.slice(1).split('').map((s) => s + s).join('');
        }
        // convert 
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `RGB(${r}, ${g}, ${b})`;
    }
    return '';
  };

// Convert HEX color to HSL format
export const hexToHsl = (hex: string): string => {
    if (/^#([a-f0-9]{3}){1,2}$/i.test(hex)) {
        if (hex.length === 4) {
            hex = '#' + hex.slice(1).split('').map((s) => s + s).join('');
        }
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
  
        // convert
        const max = Math.max(r, g, b) / 255;
        const min = Math.min(r, g, b) / 255;
        const delta = max - min;
  
        let h = 0;
        let s = 0;
        let l = (max + min) / 2;
  
        if (delta !== 0) {
            s = delta / (1 - Math.abs(2 * l - 1));
            switch (max) {
                case r / 255:
                    h = ((g / 255 - b / 255) / delta) % 6;
                    break;
                case g / 255:
                    h = (b / 255 - r / 255) / delta + 2;
                    break;
                case b / 255:
                    h = (r / 255 - g / 255) / delta + 4;
                    break;
            }
        }
  
        h = Math.round(h * 60);
        if (h < 0) h += 360;
  
        s = Math.round(s * 100);
        l = Math.round(l * 100);
  
        return `HSL(${h}, ${s}%, ${l}%)`;
    }
    return '';
  };