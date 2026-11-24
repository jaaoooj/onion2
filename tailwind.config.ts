import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { forest: '#2D5A27', leaf: '#4CAF50', earth: '#5D4037', water: '#E0F7FA', cream: '#FAFAFA' }, fontFamily: { sans: ['var(--font-noto)', 'sans-serif'] } } }, plugins: [] };
export default config;
