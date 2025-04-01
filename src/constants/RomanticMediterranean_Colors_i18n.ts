import { RomanticMediterraneanColors } from './RomanticMediterranean_Colors';

type ColorNameMap = {
    [key: string]: string;
};

type I18nMap = {
    zh: ColorNameMap;
    en: ColorNameMap;
};

export const RomanticMediterraneanColorsI18n: I18nMap = {
    zh: {
        [RomanticMediterraneanColors.MEDITERRANEAN_SKY_BLUE]: '地中海天空蓝',
        [RomanticMediterraneanColors.LIGHT_COASTAL_BLUE]: '浅海岸蓝',
        [RomanticMediterraneanColors.SOFT_SEAFOAM_BLUE]: '柔海沫蓝',
        [RomanticMediterraneanColors.PALE_COASTAL_GRAY_BLUE]: '淡海岸灰蓝',
        [RomanticMediterraneanColors.LAVENDER_MIST]: '薰衣草薄雾色',
        [RomanticMediterraneanColors.SEASHELL_PALE_GREEN]: '贝壳淡绿色',
        [RomanticMediterraneanColors.SUN_KISSED_LEMON_GREEN]: '阳光柠檬绿',
        [RomanticMediterraneanColors.BUTTERCREAM_YELLOW]: '奶油黄',
        [RomanticMediterraneanColors.PEARLY_SEASHELL_BLUE]: '珍珠贝壳蓝',
        [RomanticMediterraneanColors.DEEP_AQUA_BLUE]: '深水蓝',
        [RomanticMediterraneanColors.COASTAL_CLOUD_BLUE]: '海岸云蓝',
        [RomanticMediterraneanColors.MISTY_COASTAL_BLUE]: '雾霭海岸蓝',
        [RomanticMediterraneanColors.LIGHT_OCEAN_GRAY]: '浅海洋灰',
        [RomanticMediterraneanColors.SUMMER_WHITE]: '夏日白',
        [RomanticMediterraneanColors.COASTAL_STONE_GRAY]: '海岸石灰色'
    },
    en: {
        [RomanticMediterraneanColors.MEDITERRANEAN_SKY_BLUE]: 'Mediterranean Sky Blue',
        [RomanticMediterraneanColors.LIGHT_COASTAL_BLUE]: 'Light Coastal Blue',
        [RomanticMediterraneanColors.SOFT_SEAFOAM_BLUE]: 'Soft Seafoam Blue',
        [RomanticMediterraneanColors.PALE_COASTAL_GRAY_BLUE]: 'Pale Coastal Gray Blue',
        [RomanticMediterraneanColors.LAVENDER_MIST]: 'Lavender Mist',
        [RomanticMediterraneanColors.SEASHELL_PALE_GREEN]: 'Seashell Pale Green',
        [RomanticMediterraneanColors.SUN_KISSED_LEMON_GREEN]: 'Sun-Kissed Lemon Green',
        [RomanticMediterraneanColors.BUTTERCREAM_YELLOW]: 'Buttercream Yellow',
        [RomanticMediterraneanColors.PEARLY_SEASHELL_BLUE]: 'Pearly Seashell Blue',
        [RomanticMediterraneanColors.DEEP_AQUA_BLUE]: 'Deep Aqua Blue',
        [RomanticMediterraneanColors.COASTAL_CLOUD_BLUE]: 'Coastal Cloud Blue',
        [RomanticMediterraneanColors.MISTY_COASTAL_BLUE]: 'Misty Coastal Blue',
        [RomanticMediterraneanColors.LIGHT_OCEAN_GRAY]: 'Light Ocean Gray',
        [RomanticMediterraneanColors.SUMMER_WHITE]: 'Summer White',
        [RomanticMediterraneanColors.COASTAL_STONE_GRAY]: 'Coastal Stone Gray'
    }
};