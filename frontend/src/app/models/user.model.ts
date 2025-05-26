export interface UserDetails {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  country?: string;
  city?: string;
  address?: string;
  postalCode?: string;
  aboutMe?: string;
  profilePicture?: string;
}

export interface User {
  id?: string;
  username: string;
  email: string;
  userDetails: UserDetails;
}
