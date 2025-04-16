export interface AuthState {
  username?: string;
  access_token?: string;
  roles?: string;
  avatar?: string;
  _id?: string;
  email?: string;
  gameStarted?: boolean;
  isConnected?: boolean;
  providerType?: string;
  address?: string | null | undefined;
  chainId?: number | string;
  otpEnabled?: boolean;
  connectionError?: string;
  balance?: number | bigint;
  demoBalance?: number | bigint;
  triedReconnect?: boolean;
  verified?: boolean;
  verificationCode?: string;
  switchAccount?: boolean;
}

export interface TransactionObject {
  from: string;
  to: string;
  value: any;
  gas: number;
}

export interface BrothelState {
  password?: string;
  players?: any[];
  isPublic?: boolean;
  _id?: string;
  numberOfPlayers?: number;
  brothelName?: string;
  isActive?: boolean;
  slots?: any[];
  settlments?: any[];
  roads?: any[];
  cards?: any;
  devCards?: string[];
  dice?: string;
  diceNumber1?: number;
  diceNumber2?: number;
  brothelAdmin?: any[];
  initTimer?: false;
  betAmount?: number;
  isDemo?: boolean;
  //End of brothel state
  position?: {
    left: number;
    top: number;
  },
  allBrothelData?: any[];
  gameStarted?: true;
}

export interface Chat {
  _id: string;
  chatName: string;
  isGroupChat: boolean;
  players: AuthState[];
  groupAdmin: string;
  latestMessage: string;
}

export interface ChatState {
  chatData: any[];
  selectedChat: any;
  toogleBoxes: boolean;
}

export interface ModalsState {
  createChatModal: boolean;
  profileModal: boolean;
  toogleDrawer: boolean;
  createBrothelModal: boolean;
  reconnectBtn: boolean;
}

export interface Message {
  sender: AuthState;
  content: string;
  msgColor: string;
  chat: Chat;
  _id: string;
  createdAt?: Date;
}

export interface group {
  _id: string;
  numberOfPlayers: number;
  groupName: string;
  groupAdmin: any[];
  isActive: boolean;
  startGame: boolean;
  players: any[];
}

interface LeaderBoardTab {
  id: number;
  title: string;
}

export interface LeaderBoardTabs {
  [index: number]: LeaderBoardTab;
}

interface TableHeadItem {
  title: string;
}

export interface TableHead {
  [index: number]: TableHeadItem;
}

export interface PlayerData {
  img: React.ReactElement;
  player: string;
  win: number;
  lost: number;
  totalPlayed: number;
}

export interface LeaderBoardProps {
  tabButtonActive: string;
  setTabButtonActive: React.Dispatch<React.SetStateAction<string>>;
}
// End LeaderBoard Component

// GameBoard component
export interface Player {
  _id: string;
  // Add other properties based on your actual Player type
}

export interface GameBoardProps {
  cardsData: any[]; // Update the type based on your actual data structure
  tabButtonsData: any[]; // Update the type based on your actual data structure
}

export interface LayoutProps {
  isLogged: boolean;
}

export interface TradeResources {
  weapon: number;
  slaves: number;
  drugs: number;
  prostitute: number;
  alcohol: number;
}

export interface TradeToOthersProps {
  iWant: TradeResources;
  iGive: TradeResources;
}

export interface PlayerCardsState {
  drugs: number;
  alcohol: number;
  prostitute: number;
  slaves: number;
  weapon: number;
  police: number;
  roadBuilding: number;
  monopoly: number;
  resources: number;
  victory: number;
}

export interface PlayerDevCardsState {
  police: number[];
  roadBuilding: number[];
  monopoly: number[];
  resources: number[];
  victory: number[];
}

export interface PlayerMaterialsState {
  roads: number;
  settlment: number;
  upgrade: number;
}

export interface InitMaterial {
  status: boolean;
  object: any;
}

export interface PlayerState {
  color: string;
  avatar: string;
  name: string;
  joined: boolean;
  movesCounter: number;
  _id: string;
  active: boolean;
  cards: PlayerCardsState;
  playedCards: PlayerDevCardsState;
  mat: PlayerMaterialsState;
  longestRoad: any[];
  set1: InitMaterial;
  set2: InitMaterial;
  road1: InitMaterial
  road2: InitMaterial;
  revert: boolean;
  devCardPlayed: boolean;
  curDevCardPlayed: string;
}

export interface MoveAndBuyProps {
  tradeWindow: () => void;
}

export interface GameChatProps {
  fetchAgain: () => void;
  setFetchAgain: () => void;
}

//Trade interfaces
export interface TradeProps {
  active: boolean;
  close: () => void;
  counteroffer: boolean;
  setOpenCounterOffer: (value: string) => void;
}

export interface ResourcesProps {
  incrementHandler: () => void;
  decrementHandler: () => void;
  card: number;
  src?: string;
  svgStrock?: JSX.Element;
  svgShadow?: JSX.Element;
  type?: string;
}

export interface ToBankProps {
  incrementIWantFromBank: (resource: keyof TradeToBank["iWant"]) => void;
  decrementIWantFromBank: (resource: keyof TradeToBank["iWant"]) => void;
  data: {
    resource: any;
    img: string;
    myCards: number;
    othersCards: number;
    bankCards: number;
    svgStrock: JSX.Element;
    svgShadow: JSX.Element;
  }[];
}

export interface ToOthersProps {
  incrementIWantFromPlayers: (resource: keyof TradeToOthers["iWant"]) => void;
  decrementIWantFromPlayers: (resource: keyof TradeToOthers["iWant"]) => void;
  data: {
    resource: any;
    img: string;
    myCards: number;
    bankCards: number;
    othersCards: number;
    svgStrock: JSX.Element;
    svgShadow: JSX.Element;
  }[];
}

export interface MyResourcesProps {
  incrementIGiveHandler: (resource: keyof TradeToOthers["iGive"]) => void;
  decrementIGiveHandler: (resource: keyof TradeToOthers["iGive"]) => void;
  data: {
    resource: any;
    img: string;
    myCards: number;
    othersCards: number;
    bankCards: number;
    svgStrock: JSX.Element;
    svgShadow: JSX.Element;
  }[];
}

export interface Responder {
  player: string;
  response: string;
}

export interface CounterOfferer {
  player: string;
  response: string;
}

export interface DesisionPanelProps {
  activatePopup: () => void;
  playersResponse: any;
  finalConfirmation: (player: string) => void;
  clear: boolean;
  setClear: (clear: boolean) => void;
  detectSender: any;
  twoTradeOption: string;
  counterOfferSender: any;
  counteroffer: boolean;
  setOpenCounterOffer: (openCounterOffer: string) => void;
}

export interface IncomingOfferProps {
  openTradeWindow: () => void;
  setCounteroffer: (value: boolean) => void;
  counteroffer: boolean;
  openCounterOffer: string;
}

export interface OfferState {
  playerAvatar: string | null;
  playerName: string | null;
  playerID: string | null;
  offerReceived: {
    prostitute: number | null;
    weapon: number | null;
    slaves: number | null;
    drugs: number | null;
    alcohol: number | null;
  };
  offerGiven: {
    prostitute: number | null;
    weapon: number | null;
    slaves: number | null;
    drugs: number | null;
    alcohol: number | null;
  };
}

export interface TradeToOthers {
  iWant: {
    weapon: number;
    slaves: number;
    drugs: number;
    prostitute: number;
    alcohol: number;
  };
  iGive: {
    weapon: number;
    slaves: number;
    drugs: number;
    prostitute: number;
    alcohol: number;
  };
}

export interface TradeToBank {
  iWant: {
    weapon: number;
    slaves: number;
    drugs: number;
    prostitute: number;
    alcohol: number;
  };
  iGive: {
    weapon: number;
    slaves: number;
    drugs: number;
    prostitute: number;
    alcohol: number;
  };
}

export interface MyResources {
  alcohol: number;
  prostitute: number;
  slaves: number;
  weapon: number;
  drugs: number;
}

//end of trade interfaces
export interface BrothelsListProps {
  allBrothelData: any[];
  handleJoinRoom: (
    id: string,
    player: any,
    pl: any,
    index: number,
    betAmount: string
  ) => void;
  watcherJoinRoom: (item: any) => void;
  showPasswordModal: (id: string) => void;
  isAllowed: boolean;
  player: any;
  brothelId: string;
}

export interface SlotProps {
  slot?: any;
  roads?: any[];
  settlments?: any[];
  index?: number;
}

export interface ButtonProps {
  color?: string;
  onClick?: () => void;
  title: string;
  customStyles?: any;
  className?: string;
  width?: number;
  height?: number;
}
