import { MorandiColors } from './Morandi_Colors';

type ColorNameMap = {
    [key: string]: string;
};

type I18nMap = {
    zh: ColorNameMap;
    en: ColorNameMap;
};

export const MorandiColorsI18n: I18nMap = {
    zh: {
        [MorandiColors.LIGHT_BEIGE]: '浅米色',
        [MorandiColors.OFF_WHITE]: '米白色',
        [MorandiColors.LIGHT_BLUE]: '浅蓝色',
        [MorandiColors.LIGHT_GRAY_BLUE]: '浅灰蓝色',
        [MorandiColors.LIGHT_GRAY]: '浅灰色',
        [MorandiColors.PINK_GRAY]: '粉灰色',
        [MorandiColors.WARM_WHITE]: '暖白色',
        [MorandiColors.SOFT_PINK]: '柔粉色',
        [MorandiColors.DEEP_PURPLE]: '深紫色',
        [MorandiColors.DUSTY_PINK]: '灰粉色',
        [MorandiColors.COOL_WHITE]: '冷白色',
        [MorandiColors.WARM_GRAY]: '暖灰色',
        [MorandiColors.MINT_BLUE]: '薄荷蓝',
        [MorandiColors.MEDIUM_GRAY]: '中灰色',
        [MorandiColors.LIGHT_SILVER]: '浅银色',
        [MorandiColors.PEACH]: '桃色',
        [MorandiColors.WARM_BEIGE]: '暖米色',
        [MorandiColors.SOFT_WHITE]: '柔和白',
        [MorandiColors.TAUPE]: '灰褐色',
        [MorandiColors.COOL_GRAY]: '冷灰色',
        [MorandiColors.BROWN]: '棕色',
        [MorandiColors.WARM_TAUPE]: '暖灰褐色',
        [MorandiColors.PINK_BEIGE]: '粉米色',
        [MorandiColors.SAGE_GREEN]: '鼠尾草绿',
        [MorandiColors.DEEP_TEAL]: '深青色',
        [MorandiColors.LIGHT_MINT]: '浅薄荷色',
        [MorandiColors.SOFT_PINK_WHITE]: '粉白色',
        [MorandiColors.SAGE]: '鼠尾草色',
        [MorandiColors.DEEP_PURPLE_GRAY]: '深紫灰色',
        [MorandiColors.DUSTY_ROSE]: '灰玫瑰色',
        [MorandiColors.WARM_PINK]: '暖粉色',
        [MorandiColors.SOFT_ROSE]: '柔玫瑰色',
        [MorandiColors.DUSTY_BURGUNDY]: '灰酒红色',
        [MorandiColors.DEEP_BROWN]: '深棕色',
        [MorandiColors.DARK_GRAY]: '深灰色',
        [MorandiColors.SOFT_PURPLE]: '柔紫色',
        [MorandiColors.PINK_WHITE]: '粉白色',
        [MorandiColors.COOL_BLUE_GRAY]: '冷蓝灰色',
        [MorandiColors.NAVY_BLUE]: '海军蓝',
        [MorandiColors.WARM_ROSE]: '暖玫瑰色',
        [MorandiColors.LIGHT_BLUE_GRAY]: '浅蓝灰色',
        [MorandiColors.PURE_WHITE]: '纯白色',
        [MorandiColors.TERRACOTTA]: '赤陶色',
        [MorandiColors.WARM_WHITE_2]: '暖白色2',
        [MorandiColors.NEUTRAL_GRAY]: '中性灰',
        [MorandiColors.WARM_GRAY_2]: '暖灰色2',
        [MorandiColors.BEIGE]: '米色',
        [MorandiColors.OFF_WHITE_2]: '米白色2',
        [MorandiColors.WARM_BEIGE_2]: '暖米色2',
        [MorandiColors.DUSTY_PINK_2]: '灰粉色2',
        [MorandiColors.BLUE_GRAY]: '蓝灰色',
        [MorandiColors.DUSTY_GRAY]: '灰灰色',
        [MorandiColors.SOFT_GRAY]: '柔灰色'
    },
    en: {
        [MorandiColors.LIGHT_BEIGE]: 'Light Beige',
        [MorandiColors.OFF_WHITE]: 'Off White',
        [MorandiColors.LIGHT_BLUE]: 'Light Blue',
        [MorandiColors.LIGHT_GRAY_BLUE]: 'Light Gray Blue',
        [MorandiColors.LIGHT_GRAY]: 'Light Gray',
        [MorandiColors.PINK_GRAY]: 'Pink Gray',
        [MorandiColors.WARM_WHITE]: 'Warm White',
        [MorandiColors.SOFT_PINK]: 'Soft Pink',
        [MorandiColors.DEEP_PURPLE]: 'Deep Purple',
        [MorandiColors.DUSTY_PINK]: 'Dusty Pink',
        [MorandiColors.COOL_WHITE]: 'Cool White',
        [MorandiColors.WARM_GRAY]: 'Warm Gray',
        [MorandiColors.MINT_BLUE]: 'Mint Blue',
        [MorandiColors.MEDIUM_GRAY]: 'Medium Gray',
        [MorandiColors.LIGHT_SILVER]: 'Light Silver',
        [MorandiColors.PEACH]: 'Peach',
        [MorandiColors.WARM_BEIGE]: 'Warm Beige',
        [MorandiColors.SOFT_WHITE]: 'Soft White',
        [MorandiColors.TAUPE]: 'Taupe',
        [MorandiColors.COOL_GRAY]: 'Cool Gray',
        [MorandiColors.BROWN]: 'Brown',
        [MorandiColors.WARM_TAUPE]: 'Warm Taupe',
        [MorandiColors.PINK_BEIGE]: 'Pink Beige',
        [MorandiColors.SAGE_GREEN]: 'Sage Green',
        [MorandiColors.DEEP_TEAL]: 'Deep Teal',
        [MorandiColors.LIGHT_MINT]: 'Light Mint',
        [MorandiColors.SOFT_PINK_WHITE]: 'Soft Pink White',
        [MorandiColors.SAGE]: 'Sage',
        [MorandiColors.DEEP_PURPLE_GRAY]: 'Deep Purple Gray',
        [MorandiColors.DUSTY_ROSE]: 'Dusty Rose',
        [MorandiColors.WARM_PINK]: 'Warm Pink',
        [MorandiColors.SOFT_ROSE]: 'Soft Rose',
        [MorandiColors.DUSTY_BURGUNDY]: 'Dusty Burgundy',
        [MorandiColors.DEEP_BROWN]: 'Deep Brown',
        [MorandiColors.DARK_GRAY]: 'Dark Gray',
        [MorandiColors.SOFT_PURPLE]: 'Soft Purple',
        [MorandiColors.PINK_WHITE]: 'Pink White',
        [MorandiColors.COOL_BLUE_GRAY]: 'Cool Blue Gray',
        [MorandiColors.NAVY_BLUE]: 'Navy Blue',
        [MorandiColors.WARM_ROSE]: 'Warm Rose',
        [MorandiColors.LIGHT_BLUE_GRAY]: 'Light Blue Gray',
        [MorandiColors.PURE_WHITE]: 'Pure White',
        [MorandiColors.TERRACOTTA]: 'Terracotta',
        [MorandiColors.WARM_WHITE_2]: 'Warm White 2',
        [MorandiColors.NEUTRAL_GRAY]: 'Neutral Gray',
        [MorandiColors.WARM_GRAY_2]: 'Warm Gray 2',
        [MorandiColors.BEIGE]: 'Beige',
        [MorandiColors.OFF_WHITE_2]: 'Off White 2',
        [MorandiColors.WARM_BEIGE_2]: 'Warm Beige 2',
        [MorandiColors.DUSTY_PINK_2]: 'Dusty Pink 2',
        [MorandiColors.BLUE_GRAY]: 'Blue Gray',
        [MorandiColors.DUSTY_GRAY]: 'Dusty Gray',
        [MorandiColors.SOFT_GRAY]: 'Soft Gray'
    }
}; 