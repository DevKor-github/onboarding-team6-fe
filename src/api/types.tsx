export interface RegisterPayload {
  username: string;
  password: string;
  profilePicture: string;
  bio: string;
}

export interface LoginPayload {
  username: string;
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
