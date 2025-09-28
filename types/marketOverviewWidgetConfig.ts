interface Symbol {
  s: string; // symbol code
  d: string; // display name/description
}

interface Tab {
  title: string;
  symbols: Symbol[];
}

export interface MarketOverviewWidgetConfig {
  colorTheme: string;
  dateRange: string;
  locale: string;
  largeChartUrl: string;
  isTransparent: boolean;
  showFloatingTooltip: boolean;
  plotLineColorGrowing: string;
  plotLineColorFalling: string;
  gridLineColor: string;
  scaleFontColor: string;
  belowLineFillColorGrowing: string;
  belowLineFillColorFalling: string;
  belowLineFillColorGrowingBottom: string;
  belowLineFillColorFallingBottom: string;
  symbolActiveColor: string;
  tabs: Tab[];
  support_host: string;
  backgroundColor: string;
  width: string;
  height: number;
  showSymbolLogo: boolean;
  showChart: boolean;
}

export interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: MarketOverviewWidgetConfig;
  height?: number;
  className?: string;
}
