

export enum AgentType {
  RED = 'red',
  BLUE = 'blue',
  INNOCENT = 'innocent',
  ASSASSIN = 'assassin'
}

export enum ViewType {
  MESSAGE = 'message',
  BOARD = 'board'
}

export interface BoardItem {
  word: string;
  agentType: AgentType;
  facedown: boolean;
}

export interface Team {
  agentType: AgentType;
  score: number;
  guesses: number;
  word: string;
}
