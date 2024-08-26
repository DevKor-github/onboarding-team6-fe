export interface RegisterPayload {
  username: string;
  password: string;
  profilePicture: string;
  bio: string;
}

export interface LoginPayload {
  username: string | undefined;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    username: string;
    bio: string;
    profilePicture: string;
  };
}

export interface UserProfileResponse {
  username: string;
  profilePicture: string;
  bio: string;
}

export interface TransactionPayload {
  amount: string;
  memo: string;
  type: string;
  date: string;
}

export interface History {
  _id: string;
  type: 'spend' | 'earn';
  memo: string;
  timestamp: string;
  amount: number;
}

export interface Member {
  id: string;
  username: string;
  profilePicture: string;
}

export interface Room {
  id: string;
  createdAt: string;
  memberCount: number;
  members: Member[];
  ownerId: string;
  roomName: string;
}
