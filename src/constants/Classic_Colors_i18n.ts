import { ClassicColors } from "./Classic_Colors";
type ColorNameMap = { [key: string]: string };
type I18nMap = { zh: ColorNameMap; en: ColorNameMap };

export const ClassicColorsI18n: I18nMap = {
    zh: {
        [ClassicColors.KLEIN_BLUE]: '克莱因蓝',
        [ClassicColors.HERMES_ORANGE]: '爱马仕橙',
        [ClassicColors.TIFFANY_BLUE]: '蒂芙尼蓝',
        [ClassicColors.MARS_GREEN]: '马尔斯绿',
        [ClassicColors.VAN_DYKE_BROWN]: '凡戴克棕',
        [ClassicColors.BORDEAUX_RED]: '波尔多红',
        [ClassicColors.PRUSSIAN_BLUE]: '普鲁士蓝',
        [ClassicColors.SCHENBRUNN_YELLOW]: '申布伦黄',
        [ClassicColors.TITIAN_RED]: '提香红',
        [ClassicColors.CHINESE_RED]: '中国红'
    },
    en: {
        [ClassicColors.KLEIN_BLUE]: 'Klein Blue',
        [ClassicColors.HERMES_ORANGE]: 'Hermes Orange',
        [ClassicColors.TIFFANY_BLUE]: 'Tiffany Blue',
        [ClassicColors.MARS_GREEN]: 'Mars Green',
        [ClassicColors.VAN_DYKE_BROWN]: 'Van Dyke Brown',
        [ClassicColors.BORDEAUX_RED]: 'Bordeaux Red',
        [ClassicColors.PRUSSIAN_BLUE]: 'Prussian Blue',
        [ClassicColors.SCHENBRUNN_YELLOW]: 'Schenbrunn Yellow',
        [ClassicColors.TITIAN_RED]: 'Titian Red',
        [ClassicColors.CHINESE_RED]: 'Chinese Red'
    }
};