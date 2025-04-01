import { VintageColors } from './Vintage_Colors';

type ColorNameMap = {
    [key: string]: string;
};

type I18nMap = {
    zh: ColorNameMap;
    en: ColorNameMap;
};

export const VintageColorsI18n: I18nMap = {
    zh: {
        [VintageColors.SOFT_PEACH]: '柔桃色',
        [VintageColors.DEEP_BROWN_RED]: '深棕红色',
        [VintageColors.LIGHT_BEIGE_TAN]: '浅米色棕褐色',
        [VintageColors.WARM_BEIGE]: '暖米色',
        [VintageColors.MID_BEIGE]: '中米色',
        [VintageColors.SANDY_BEIGE]: '沙质米色',
        [VintageColors.BRONZE_BROWN]: '青铜棕色',
        [VintageColors.PALE_BEIGE]: '淡米色',
        [VintageColors.LIGHT_PEACH_BEIGE]: '浅桃米色',
        [VintageColors.CREAMY_PEACH]: '乳脂桃色',
        [VintageColors.PALE_PINKISH_BEIGE]: '淡粉米色',
        [VintageColors.ROSE_PEACH]: '玫瑰桃色',
        [VintageColors.PINKISH_GRAY_BEIGE]: '粉灰米色',
        [VintageColors.OFF_WHITE_YELLOW]: '米黄白色',
        [VintageColors.RUSTY_BROWN]: '铁锈棕色'
    },
    en: {
        [VintageColors.SOFT_PEACH]: 'Soft Peach',
        [VintageColors.DEEP_BROWN_RED]: 'Deep Brown Red',
        [VintageColors.LIGHT_BEIGE_TAN]: 'Light Beige Tan',
        [VintageColors.WARM_BEIGE]: 'Warm Beige',
        [VintageColors.MID_BEIGE]: 'Mid Beige',
        [VintageColors.SANDY_BEIGE]: 'Sandy Beige',
        [VintageColors.BRONZE_BROWN]: 'Bronze Brown',
        [VintageColors.PALE_BEIGE]: 'Pale Beige',
        [VintageColors.LIGHT_PEACH_BEIGE]: 'Light Peach Beige',
        [VintageColors.CREAMY_PEACH]: 'Creamy Peach',
        [VintageColors.PALE_PINKISH_BEIGE]: 'Pale Pinkish Beige',
        [VintageColors.ROSE_PEACH]: 'Rose Peach',
        [VintageColors.PINKISH_GRAY_BEIGE]: 'Pinkish Gray Beige',
        [VintageColors.OFF_WHITE_YELLOW]: 'Off-White Yellow',
        [VintageColors.RUSTY_BROWN]: 'Rusty Brown'
    }
};