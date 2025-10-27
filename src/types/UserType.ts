

export interface RegisterData { 
  name: string;
  email: string;
  password: string
}

export interface LoginData {
  email: string;
  password: string; 
}

export interface AuthResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    isHost: boolean;
  };
}