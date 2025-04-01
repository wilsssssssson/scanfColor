import { ModernMinimalColors } from "./ModernMinimal_Colors";
type ColorNameMap = { [key: string]: string };
type I18nMap = { zh: ColorNameMap; en: ColorNameMap };

export const ModernMinimalColorsI18n: I18nMap = {
    zh: {
        [ModernMinimalColors.DEEP_MAHOGANY]: '深红木色',
        [ModernMinimalColors.WARM_IVORY]: '暖象牙色',
        [ModernMinimalColors.CLAY_BROWN]: '陶土棕色',
        [ModernMinimalColors.GOLDEN_YELLOW]: '金盏黄色',
        [ModernMinimalColors.MISTY_TEAL]: '雾霭青色',
        [ModernMinimalColors.SILVER_GRAY]: '银灰色',
        [ModernMinimalColors.MEDIUM_GRAY]: '中灰色',
        [ModernMinimalColors.SLATE_GRAY]: '石板灰色',
        [ModernMinimalColors.ASH_GRAY]: '灰烬灰色',
        [ModernMinimalColors.STONE_GRAY]: '岩石灰色',
        [ModernMinimalColors.DUSTY_BLUE]: '尘蓝色',
        [ModernMinimalColors.PURE_WHITE]: '纯白色',
        [ModernMinimalColors.WARM_WHITE]: '暖白色',
        [ModernMinimalColors.COOL_GRAY]: '冷灰色',
        [ModernMinimalColors.ICE_WHITE]: '冰白色'
    },
    en: {
        [ModernMinimalColors.DEEP_MAHOGANY]: 'Deep Mahogany',
        [ModernMinimalColors.WARM_IVORY]: 'Warm Ivory',
        [ModernMinimalColors.CLAY_BROWN]: 'Clay Brown',
        [ModernMinimalColors.GOLDEN_YELLOW]: 'Golden Yellow',
        [ModernMinimalColors.MISTY_TEAL]: 'Misty Teal',
        [ModernMinimalColors.SILVER_GRAY]: 'Silver Gray',
        [ModernMinimalColors.MEDIUM_GRAY]: 'Medium Gray',
        [ModernMinimalColors.SLATE_GRAY]: 'Slate Gray',
        [ModernMinimalColors.ASH_GRAY]: 'Ash Gray',
        [ModernMinimalColors.STONE_GRAY]: 'Stone Gray',
        [ModernMinimalColors.DUSTY_BLUE]: 'Dusty Blue',
        [ModernMinimalColors.PURE_WHITE]: 'Pure White',
        [ModernMinimalColors.WARM_WHITE]: 'Warm White',
        [ModernMinimalColors.COOL_GRAY]: 'Cool Gray',
        [ModernMinimalColors.ICE_WHITE]: 'Ice White'
    }
};