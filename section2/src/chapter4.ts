// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "안단희",
  nickname: "jurepi",
  birth: "1975.11.07",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "김민준",
  nickname: "minjun",
  birth: "1990.01.01",
  bio: "안녕하세요",
  location: "서울",
};

type ContryCodes_ = {
  Korea: string;
  UnitedStates: string;
  UnitedKingdom: string;
};

// 인덱스 시그니처
type ContryCodes = {
  [key: string]: string;
};

let countryCode: ContryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};
