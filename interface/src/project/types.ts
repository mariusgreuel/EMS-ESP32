export interface Settings {
  locale: string;
  tx_mode: number;
  ems_bus_id: number;
  syslog_enabled: boolean;
  syslog_level: number;
  syslog_mark_interval: number;
  syslog_host: string;
  syslog_port: number;
  boiler_heatingoff: boolean;
  shower_timer: boolean;
  shower_alert: boolean;
  shower_alert_coldshot: number;
  shower_alert_trigger: number;
  rx_gpio: number;
  tx_gpio: number;
  telnet_enabled: boolean;
  dallas_gpio: number;
  dallas_parasite: boolean;
  led_gpio: number;
  hide_led: boolean;
  low_clock: boolean;
  notoken_api: boolean;
  readonly_mode: boolean;
  analog_enabled: boolean;
  pbutton_gpio: number;
  trace_raw: boolean;
  board_profile: string;
  bool_format: number;
  bool_dashboard: number;
  enum_format: number;
  fahrenheit: boolean;
  phy_type: number;
  eth_power: number;
  eth_phy_addr: number;
  eth_clock_mode: number;
  platform: string;
}

export enum busConnectionStatus {
  BUS_STATUS_CONNECTED = 0,
  BUS_STATUS_TX_ERRORS = 1,
  BUS_STATUS_OFFLINE = 2
}

export interface Stat {
  id: number; // id
  s: number; // success
  f: number; // fail
  q: number; // quality
}

export interface Status {
  status: busConnectionStatus;
  tx_mode: number;
  uptime: number;
  num_devices: number;
  num_sensors: number;
  num_analogs: number;
  stats: Stat[];
}

export interface Device {
  id: number; // id index
  tn: string; // device type translated name
  t: number; // device type id
  b: string; // brand
  n: string; // name
  d: number; // deviceid
  p: number; // productid
  v: string; // version
  e: number; // entities
}

export interface TemperatureSensor {
  id: string; // id string
  n: string; // name/alias
  t?: number; // temp, optional
  o: number; // offset
  u: number; // uom
}

export interface AnalogSensor {
  id: number;
  g: number; // GPIO
  n: string;
  v: number;
  u: number;
  o: number;
  f: number;
  t: number;
  d: boolean; // deleted flag
}

export interface WriteTemperatureSensor {
  id: string;
  name: string;
  offset: number;
}

export interface SensorData {
  ts: TemperatureSensor[];
  as: AnalogSensor[];
  analog_enabled: boolean;
  platform: string;
}

export interface CoreData {
  connected: boolean;
  devices: Device[];
}

export interface DeviceShort {
  i: number; // id
  d?: number; // deviceid
  p?: number; // productid
  s: string; // shortname
  t?: number; // device type id
  tn?: string; // device type internal name
}

export interface Devices {
  devices: DeviceShort[];
}

export interface DeviceValue {
  id: string; // index, contains mask+name
  v: any; // value, Number or String
  u: number; // uom
  c?: string; // command, optional
  l?: string[]; // list, optional
  h?: string; // help text, optional
  s?: string; // steps for up/down, optional
  m?: number; // min, optional
  x?: number; // max, optional
}
export interface DeviceData {
  data: DeviceValue[];
}

export interface DeviceEntity {
  id: string; // shortname
  v?: any; // value, in any format, optional
  n?: string; // fullname, optional
  cn?: string; // custom fullname, optional
  m: number; // mask
  w: boolean; // writeable
  mi?: number; // min value
  ma?: number; // max value
  o_m?: number; // original mask before edits
  o_cn?: string; // original cn before edits
  o_mi?: number; // original min value
  o_ma?: number; // original max value
}

export enum DeviceValueUOM {
  NONE = 0,
  DEGREES,
  DEGREES_R,
  PERCENT,
  LMIN,
  KWH,
  WH,
  HOURS,
  MINUTES,
  UA,
  BAR,
  KW,
  W,
  KB,
  SECONDS,
  DBM,
  FAHRENHEIT,
  MV,
  SQM,
  M3,
  L,
  KMIN,
  K,
  VOLTS,
  MBAR
}

export const DeviceValueUOM_s = [
  '',
  '°C',
  '°C',
  '%',
  'l/min',
  'kWh',
  'Wh',
  'hours',
  'minutes',
  'µA',
  'bar',
  'kW',
  'W',
  'KB',
  'seconds',
  'dBm',
  '°F',
  'mV',
  'm²',
  'm³',
  'l',
  'K*min',
  'K',
  'V',
  'mbar'
];

export enum AnalogType {
  REMOVED = -1,
  NOTUSED = 0,
  DIGITAL_IN,
  COUNTER,
  ADC,
  TIMER,
  RATE,
  DIGITAL_OUT,
  PWM_0,
  PWM_1,
  PWM_2
}

export const AnalogTypeNames = [
  '(disabled)',
  'Digital In',
  'Counter',
  'ADC',
  'Timer',
  'Rate',
  'Digital Out',
  'PWM 0',
  'PWM 1',
  'PWM 2'
];

type BoardProfiles = {
  [name: string]: string;
};

export const BOARD_PROFILES: BoardProfiles = {
  S32: 'BBQKees Gateway S32',
  S32S3: 'BBQKees Gateway S3',
  E32: 'BBQKees Gateway E32',
  E32V2: 'BBQKees Gateway E32 V2',
  NODEMCU: 'NodeMCU 32S',
  'MH-ET': 'MH-ET Live D1 Mini',
  LOLIN: 'Lolin D32',
  OLIMEX: 'Olimex ESP32-EVB',
  OLIMEXPOE: 'Olimex ESP32-POE',
  C3MINI: 'Wemos C3 Mini',
  S2MINI: 'Wemos S2 Mini',
  S3MINI: 'Liligo S3',
  XIAOESP32C3: 'Seeed Studio XIAO ESP32C3',
  XIAOESP32S3: 'Seeed Studio XIAO ESP32S3',
  NANOESP32: 'Arduino Nano ESP32'
};

export interface BoardProfile {
  board_profile: string;
  led_gpio: number;
  dallas_gpio: number;
  rx_gpio: number;
  tx_gpio: number;
  pbutton_gpio: number;
  phy_type: number;
  eth_power: number;
  eth_phy_addr: number;
  eth_clock_mode: number;
}

export interface APIcall {
  device: string;
  entity: string;
  id: any;
}
export interface WriteAnalogSensor {
  id: number;
  gpio: number;
  name: string;
  factor: number;
  offset: number;
  uom: number;
  type: number;
  deleted: boolean;
}

export enum DeviceEntityMask {
  DV_DEFAULT = 0,
  DV_WEB_EXCLUDE = 1,
  DV_API_MQTT_EXCLUDE = 2,
  DV_READONLY = 4,
  DV_FAVORITE = 8,
  DV_DELETED = 128
}

export interface ScheduleItem {
  id: number; // unique index
  active: boolean;
  deleted?: boolean; // optional
  flags: number;
  time: string;
  cmd: string;
  value: string;
  name: string; // optional
  o_id?: number;
  o_active?: boolean;
  o_deleted?: boolean;
  o_flags?: number;
  o_time?: string;
  o_cmd?: string;
  o_value?: string;
  o_name?: string;
}

export enum ScheduleFlag {
  SCHEDULE_SUN = 1,
  SCHEDULE_MON = 2,
  SCHEDULE_TUE = 4,
  SCHEDULE_WED = 8,
  SCHEDULE_THU = 16,
  SCHEDULE_FRI = 32,
  SCHEDULE_SAT = 64,
  SCHEDULE_TIMER = 128
}

export interface EntityItem {
  id: number; // unique number
  ram: number;
  name: string;
  device_id: number | string;
  type_id: number | string;
  offset: number;
  factor: number;
  uom: number;
  value_type: number;
  value?: any;
  writeable: boolean;
  deleted?: boolean;
  o_id?: number;
  o_ram?: number;
  o_name?: string;
  o_device_id?: number | string;
  o_type_id?: number | string;
  o_offset?: number;
  o_factor?: number;
  o_uom?: number;
  o_value_type?: number;
  o_deleted?: boolean;
  o_writeable?: boolean;
  o_value?: any;
}

export interface Entities {
  entities: EntityItem[];
}

// matches emsdevice.h DeviceType
export const enum DeviceType {
  SYSTEM = 0,
  TEMPERATURESENSOR,
  ANALOGSENSOR,
  SCHEDULER,
  BOILER,
  THERMOSTAT,
  MIXER,
  SOLAR,
  HEATPUMP,
  GATEWAY,
  SWITCH,
  CONTROLLER,
  CONNECT,
  ALERT,
  EXTENSION,
  GENERIC,
  HEATSOURCE,
  CUSTOM,
  UNKNOWN
}

// matches emsdevicevalue.h
export const enum DeviceValueType {
  BOOL,
  INT,
  UINT,
  SHORT,
  USHORT,
  ULONG,
  TIME, // same as ULONG (32 bits)
  ENUM,
  STRING,
  CMD
}

export const DeviceValueTypeNames = [
  //
  'BOOL',
  'INT',
  'UINT',
  'SHORT',
  'USHORT',
  'ULONG',
  'TIME',
  'ENUM',
  'RAW',
  'CMD'
];
