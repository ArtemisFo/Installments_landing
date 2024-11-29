export interface InkColorType {
  wd: string;
  wh: string;
  ws: string;
  wp: string;
  bd: string;
  bh: string;
  bs: string;
  bp: string;
}

export interface SurfaceColorType {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

export interface CommonColorType {
  blackBlur: string;
  primaryGradient: string;
}

export interface MainColorType {
  main: string;
  onMain: string;
  container: string;
  onContainer: string;
}

export interface SourceColorType {
  0: string;
  5: string;
  10: string;
  15: string;
  20: string;
  25: string;
  30: string;
  35: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  98: string;
  99: string;
  100: string;
  101: string;
}

export interface ColorsThemeType {
  primary: MainColorType & SourceColorType;
  secondary: MainColorType & SourceColorType;
  ink: InkColorType;
  warning: MainColorType & SourceColorType;
  info: MainColorType & SourceColorType;
  success: MainColorType & SourceColorType;
  error: MainColorType & SourceColorType;
  surface: SurfaceColorType;
  neutral: MainColorType & SourceColorType;
  common: CommonColorType;
}
