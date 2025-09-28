import { MARKET_OVERVIEW_WIDGET_CONFIG_TYPE } from "@/types/marketOverviewWidgetConfig";

export const MARKET_OVERVIEW_WIDGET_CONFIG: MARKET_OVERVIEW_WIDGET_CONFIG_TYPE =
  {
    allow_symbol_change: true,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: "D",
    locale: "en",
    save_image: true,
    style: "1",
    symbol: "NASDAQ:AAPL",
    theme: "dark",
    timezone: "Etc/UTC",
    backgroundColor: "#0F0F0F",
    gridColor: "rgba(242, 242, 242, 0.06)",
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    autosize: true,
  };
