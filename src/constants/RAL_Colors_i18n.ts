import { RALColors } from './RAL_Colors';
type ColorNameMap = { [key: string]: string };
type I18nMap = { zh: ColorNameMap; en: ColorNameMap };

export const RALColorsI18n: I18nMap = {
    zh: {
        [RALColors.PINK_BROWN]: '粉红棕',
        [RALColors.RUST]: '铁锈色',
        [RALColors.FOX_RED]: '狐狸红',
        [RALColors.PEANUT_BROWN]: '花生酱',
        [RALColors.GARLIC_BEIGE]: '大蒜米',
        [RALColors.PEPPER_WHITE]: '胡椒白',
        [RALColors.PEARL_YELLOW]: '珍珠黄',
        [RALColors.OLIVE_GRAY]: '橄榄灰',
        [RALColors.BUDS_GREEN]: '嫩芽绿',
        [RALColors.EASY_GREEN]: '轻松绿',
        [RALColors.BRIGHT_TEAL]: '明水鸭色',
        [RALColors.NIGHT_TURQUOISE]: '夜晚绿松石',
        [RALColors.WORKSHOP_BLUE]: '工作坊蓝',
        [RALColors.ARCHITECTURAL_BLUE]: '建筑蓝',
        [RALColors.OPAL_PINK]: '蛋白石粉红'
    },
    en: {
        [RALColors.PINK_BROWN]: 'Pink Brown',
        [RALColors.RUST]: 'Rust',
        [RALColors.FOX_RED]: 'Fox Red',
        [RALColors.PEANUT_BROWN]: 'Peanut Brown',
        [RALColors.GARLIC_BEIGE]: 'Garlic Beige',
        [RALColors.PEPPER_WHITE]: 'Pepper White',
        [RALColors.PEARL_YELLOW]: 'Pearl Yellow',
        [RALColors.OLIVE_GRAY]: 'Olive Gray',
        [RALColors.BUDS_GREEN]: 'Buds Green',
        [RALColors.EASY_GREEN]: 'Easy Green',
        [RALColors.BRIGHT_TEAL]: 'Bright Teal',
        [RALColors.NIGHT_TURQUOISE]: 'Night Turquoise',
        [RALColors.WORKSHOP_BLUE]: 'Workshop Blue',
        [RALColors.ARCHITECTURAL_BLUE]: 'Architectural Blue',
        [RALColors.OPAL_PINK]: 'Opal Pink'
    }
};